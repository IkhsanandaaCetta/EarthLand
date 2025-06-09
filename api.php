<?php
ini_set('display_errors', 1);
error_reporting(E_ALL);

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

$method = $_SERVER['REQUEST_METHOD'];
$requestUri = $_SERVER['REQUEST_URI'];
$data = json_decode(file_get_contents("php://input"), true);

$host = 'localhost';
$db   = 'EarthLand';
$user = 'postgres';
$pass = 'Alvionita03';

try {
    $pdo = new PDO("pgsql:host=$host;dbname=$db", $user, $pass);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(["success" => false, "message" => "Koneksi DB gagal: " . $e->getMessage()]);
    exit;
}

// === REGISTER ===
if (strpos($requestUri, '/register') !== false && $method === 'POST') {
    $username = $data['username'] ?? '';
    $email = $data['email'] ?? '';
    $password = $data['password'] ?? '';
    $confirmPassword = $data['confirmPassword'] ?? '';

    if (!$username || !$email || !$password || !$confirmPassword) {
        echo json_encode(["success" => false, "message" => "Semua field harus diisi."]);
        exit;
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo json_encode(["success" => false, "message" => "Format email tidak valid."]);
        exit;
    }

    if ($password !== $confirmPassword) {
        echo json_encode(["success" => false, "message" => "Konfirmasi password tidak cocok."]);
        exit;
    }

    $stmt = $pdo->prepare("SELECT id FROM users WHERE username = :username OR email = :email");
    $stmt->execute(['username' => $username, 'email' => $email]);
    if ($stmt->fetch()) {
        echo json_encode(["success" => false, "message" => "Username atau email sudah terdaftar."]);
        exit;
    }

    $hashedPassword = password_hash($password, PASSWORD_DEFAULT);
    $stmt = $pdo->prepare("INSERT INTO users (username, email, password) VALUES (:username, :email, :password)");
    $stmt->execute(['username' => $username, 'email' => $email, 'password' => $hashedPassword]);

    echo json_encode(["success" => true, "message" => "Akun berhasil dibuat."]);
}

// === LOGIN ===
elseif ($method === 'POST' && isset($data['login']) && isset($data['password'])) {
    $loginInput = $data['login'] ?? '';
    $password = $data['password'] ?? '';

    if (!$loginInput || !$password) {
        echo json_encode(["success" => false, "message" => "Isi username/email dan password."]);
        exit;
    }

    $stmt = $pdo->prepare("SELECT password FROM users WHERE username = :login OR email = :login");
    $stmt->execute(['login' => $loginInput]);
    $user = $stmt->fetch(PDO::FETCH_ASSOC);

    if ($user && password_verify($password, $user['password'])) {
        echo json_encode(["success" => true, "message" => "Login berhasil."]);
    } else {
        echo json_encode(["success" => false, "message" => "Username/email atau password salah."]);
    }

// === SIMPAN PENDAFTARAN TANAH ===
elseif (strpos($requestUri, '/pendaftaran-tanah') !== false && $method === 'POST') {
    $nama = $data['nama'] ?? '';
    $nik = $data['nik'] ?? '';
    $email = $data['email'] ?? null;
    $telepon = $data['telepon'] ?? '';
    $alamat = $data['alamat'] ?? '';
    $jenisHak = $data['jenisHak'] ?? '';
    $luasTanah = $data['luasTanah'] ?? 0;
    $alamatTanah = $data['alamatTanah'] ?? '';
    $kecamatan = $data['kecamatan'] ?? '';
    $kelurahan = $data['kelurahan'] ?? '';
    $nomorSertifikat = $data['nomorSertifikat'] ?? null;
    $tanggalSertifikat = $data['tanggalSertifikat'] ?? null;
    $keterangan = $data['keterangan'] ?? null;
    $tanggalDaftar = date('Y-m-d');

    // Validasi sederhana
    if (!$nama || !$nik || !$telepon || !$alamat || !$jenisHak || !$luasTanah || !$alamatTanah || !$kecamatan || !$kelurahan) {
        http_response_code(400);
        echo json_encode(["success" => false, "message" => "Field wajib tidak boleh kosong."]);
        exit;
    }
    if (strlen($nik) !== 16 || !preg_match('/^\d{16}$/', $nik)) {
        http_response_code(400);
        echo json_encode(["success" => false, "message" => "NIK harus 16 digit angka."]);
        exit;
    }

    // Prepare dan eksekusi insert
    $stmt = $pdo->prepare("
        INSERT INTO pendaftaran_tanah
        (id, nama, nik, email, telepon, alamat, jenis_hak, luas_tanah, alamat_tanah, kecamatan, kelurahan, nomor_sertifikat, tanggal_sertifikat, keterangan, tanggal_daftar)
        VALUES
        (:id, :nama, :nik, :email, :telepon, :alamat, :jenis_hak, :luas_tanah, :alamat_tanah, :kecamatan, :kelurahan, :nomor_sertifikat, :tanggal_sertifikat, :keterangan, :tanggal_daftar)
    ");

  try {
        $id = round(microtime(true) * 1000);
        $stmt->execute([
            ':id' => $id,
            ':nama' => $nama,
            ':nik' => $nik,
            ':email' => $email,
            ':telepon' => $telepon,
            ':alamat' => $alamat,
            ':jenis_hak' => $jenisHak,
            ':luas_tanah' => (int)$luasTanah,
            ':alamat_tanah' => $alamatTanah,
            ':kecamatan' => $kecamatan,
            ':kelurahan' => $kelurahan,
            ':nomor_sertifikat' => $nomorSertifikat,
            ':tanggal_sertifikat' => $tanggalSertifikat ?: null,
            ':keterangan' => $keterangan,
            ':tanggal_daftar' => $tanggalDaftar,
        ]);
        echo json_encode(["success" => true, "message" => "Data pendaftaran tanah berhasil disimpan."]);
    } catch (PDOException $e) {
        http_response_code(500);
        echo json_encode([
            "success" => false,
            "message" => "Gagal menyimpan data: " . $e->getMessage()
        ]);
        exit;
    }
}


// === SEARCH BIDANG TANAH ===
} elseif (strpos($requestUri, '/search') !== false && $method === 'GET') {
    $keyword = $_GET['q'] ?? '';

    if ($keyword) {
        $stmt = $pdo->prepare("
            SELECT * FROM bidang_tanah
            WHERE LOWER(nib) LIKE LOWER(:keyword)
               OR LOWER(nik) LIKE LOWER(:keyword)
               OR LOWER(pemilik) LIKE LOWER(:keyword)
            LIMIT 50
        ");
        $stmt->execute(['keyword' => '%' . $keyword . '%']);
        $results = $stmt->fetchAll(PDO::FETCH_ASSOC);

        echo json_encode(["success" => true, "results" => $results]);
    } else {
        echo json_encode(["success" => false, "message" => "Query kosong."]);
    }

// === DEFAULT ===
else {
    http_response_code(404);
    echo json_encode(["success" => false, "message" => "Endpoint tidak ditemukan."]);
}
?>

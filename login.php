<?php
session_start();

// Ambil data dari form
$username = $_POST['username'];
$password = $_POST['password'];

// Koneksi ke PostgreSQL
$host = "localhost";
$dbname = "EarthLand";
$user = "postgres";
$pass = "Alvionita03";

$conn = pg_connect("host=$host dbname=$dbname user=$user password=$pass");

if (!$conn) {
    die("Koneksi gagal: " . pg_last_error());
}

// Cek data di database (username atau email)
$query = "SELECT * FROM akun WHERE (name = $1 OR email = $1) AND password = $2";
$result = pg_query_params($conn, $query, array($name, $password));

if (pg_num_rows($result) > 0) {
    $userData = pg_fetch_assoc($result);
    
    // Simpan sesi pengguna
    $_SESSION['currentUser'] = $userData;

    // Redirect ke halaman tujuan
    header("Location: Pendaftaran Tanah.html");
    exit();
} else {
    echo "<script>
        alert('Username atau password salah!');
        window.location.href = 'login.html';
    </script>";
}

pg_close($conn);
?>

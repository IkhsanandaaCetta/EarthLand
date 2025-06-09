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
        "message" => "Gagal menyimpan data: " . $e->getMessage(),
        "debug" => [
            "sql_error" => $e->getMessage()
        ]
    ]);
    exit;
}

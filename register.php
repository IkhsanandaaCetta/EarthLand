<?php
include 'db_config.php';

$fullName = $_POST['fullName'] ?? '';
$email = $_POST['email'] ?? '';
$password = $_POST['password'] ?? '';
$confirmPassword = $_POST['confirmPassword'] ?? '';

if ($password !== $confirmPassword) {
    echo "<script>alert('Password tidak cocok!'); window.history.back();</script>";
    exit();
}

if (strlen($password) < 6 || strlen($fullName) < 3) {
    echo "<script>alert('Data tidak valid!'); window.history.back();</script>";
    exit();
}

$hashedPassword = password_hash($password, PASSWORD_DEFAULT);

$checkQuery = "SELECT * FROM users WHERE email = $1";
$checkResult = pg_query_params($conn, $checkQuery, array($email));

if (!$checkResult) {
    echo "<script>alert('Terjadi kesalahan saat cek data!'); window.history.back();</script>";
    exit();
}

if (pg_num_rows($checkResult) > 0) {
    echo "<script>alert('Email sudah terdaftar!'); window.history.back();</script>";
    exit();
}

$query = "INSERT INTO users (name, email, password) VALUES ($1, $2, $3)";
$result = pg_query_params($conn, $query, array($fullName, $email, $hashedPassword));

if ($result) {
    echo "<script>alert('Pendaftaran berhasil!'); window.location.href='login.html';</script>";
} else {
    echo "<script>alert('Terjadi kesalahan saat menyimpan data!'); window.history.back();</script>";
}
?>

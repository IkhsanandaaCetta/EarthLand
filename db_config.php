
<?php
$host = "localhost";
$port = "5432";
$dbname = "EarthLand";
$user = "postgres";
$password = "Alvionita03";

$conn = pg_connect("host=$host port=$port dbname=$dbname user=$user password=$password");

if (!$conn) {
    die("Koneksi database gagal.");
}
?>

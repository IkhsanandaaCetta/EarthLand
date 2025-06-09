<?php
header('Content-Type: application/json');
$host = "localhost";
$db = "EarthLand";
$user = "postgres";
$pass = "Alvionita03";

$conn = pg_connect("host=$host dbname=$db user=$user password=$pass");

if (!$conn) {
    echo json_encode([]);
    exit;
}

$term = strtolower($_GET['q']);

$sql = "SELECT gid, nib, pemilik, nik
        FROM bidang_tanah 
        WHERE LOWER(nib) LIKE '%$term%' OR LOWER(pemilik) LIKE '%$term%' OR LOWER(nik) LIKE '%$term%'";

$result = pg_query($conn, $sql);
$data = [];

while ($row = pg_fetch_assoc($result)) {
    $data[] = [
        "gid" => $row["id"],
        "nib" => $row["nib"],
        "owner" => $row["pemilik"],
        "nik" => $row["nik"],
    ];
}

echo json_encode($data);
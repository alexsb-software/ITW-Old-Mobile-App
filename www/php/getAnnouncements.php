<?php
$success = "";

$link = new mysqli("176.32.230.48", "cl59-alexsb", "g-Rtx!fG^", "cl59-alexsb");

if (!$link || $link->connect_errno) {
	die ("Database Connection Error");
}

$query = "SELECT Title, Body, CONVERT_TZ(PublishTime, '+00:00', '+01:00') AS Time FROM announcements;";
$result = $link->query($query);

print_r($result);

$encode = array();

while ($row = $result->fetch_object()) {
	$encode[] = $row;
}

$success = json_encode($encode, JSON_PRETTY_PRINT);

echo "<pre>" . $success . "</pre>";
	
// echo $success ; 
?>
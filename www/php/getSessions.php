<?php
$success = "";

$link = new mysqli("176.32.230.48", "cl59-alexsb", "g-Rtx!fG^", "cl59-alexsb");

if (!$link || $link->connect_errno) {
	die ("Database Connection Error");
}

$query = "SELECT *, DATE_FORMAT(SessionStartTime, '%H:%i') AS StartTime, DATE_FORMAT(SessionEndTime, '%H:%i') AS EndTime FROM schedule";

if ($_GET) {
    if ($_GET["date"]) {
        $query .= (" WHERE EXTRACT(day FROM sessionDate) = " . $_GET["date"]);
    }

    if ($_GET["id"]) {
        $query .= (" WHERE id = " . $_GET["id"]);
    }
}

$query .= " ORDER BY SessionStartTime ASC";

$result = $link->query($query);

$encode = array();

while ($row = $result->fetch_object()) {
	$encode[] = $row;
}

$success = json_encode($encode, JSON_PRETTY_PRINT);

echo "<pre>" . $success . "</pre>";
	
// echo $success ; 
?>
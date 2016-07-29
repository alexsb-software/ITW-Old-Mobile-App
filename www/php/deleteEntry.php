<?php

$error = "";
$success = "";

if ($_POST) {
	if (!$_POST["tableName"]) {
		$error .= "Table Name Required.<br>";
	}
	if (!$_POST["rowId"]) {
		$error .= "Row ID Required. <br>";
	}

	if ($error != "") {
		$error = '<div class="alert alert-danger" role="alert"><p><strong>There are error(s) in your form !</strong></p>' . $error . '</div>';
	} else {
		$link = new mysqli("176.32.230.48", "cl59-alexsb", "g-Rtx!fG^", "cl59-alexsb");

		if (!$link || $link->connect_errno) {
			die("Database Connection Error");
		}

		$query = "DELETE FROM $_POST[tableName] WHERE id=$_POST[rowId];";

		$result = $link->query($query);

		if ($result === false) {
			$error = "Could not delete row from database.";
		} else {
			$success = "Entry deleted successfully !";
		}
	}
}

echo $error . $success;

?>
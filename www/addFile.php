<?php

$error = "";

if ($_POST) {
	if (!$_POST["fileName"]) {
		$error .= "File Name Required.<br>";
	}
	if (!$_POST["fileUrl"]) {
		$error .= "File Link (URL) Required. <br>";
	}
	
	if ($error != "") {
		$error = '<div class="alert alert-danger" role="alert"><p><strong>there are error(s)in your form!</strong></p>' . $error . '</div>';
	} else {
		$link = mysqli_connect("176.32.230.48", "cl59-alexsb", "g-Rtx!fG^", "cl59-alexsb");
		
		if (!$link) {
			die("Database Connection Error");
		}
		
		$query = "INSERT INTO files (FileName, FileURL) VALUES ($_POST['fileName'], $_POST['fileUrl']);";
			
		$result = mysqli_query($link, $query);
		$row = mysqli_fetch_array($result);
		
		if (!isset($row)) {
			$error = "Could not add row to database.";
		}	
	}
}

echo $error;

?>
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
		$link = new mysqli("176.32.230.48", "cl59-alexsb", "g-Rtx!fG^", "cl59-alexsb");
		
		if (!$link || $link->connect_errno) {
			die("Database Connection Error");
		}
		
		$query = "INSERT INTO files (FileName, FileURL) VALUES ('$_POST[fileName]', '$_POST[fileUrl]');";
		
		echo $query . "<br>";
			
		$result = $link->query($query);
		
		var_dump($result);
		
		if ($result === false) {
			$error = "Could not add row to database.";
		}
	}
}

echo $error;

?>
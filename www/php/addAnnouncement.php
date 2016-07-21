<?php

$error = "";

if ($_POST) {
	if (!$_POST["announcementTitle"]) {
		$error .= "Announcement Title Required.<br>";
	}
	if (!$_POST["announcementBody"]) {
		$error .= "Announcement Body Required. <br>";
	}
	
	if ($error != "") {
		$error = '<div class="alert alert-danger" role="alert"><p><strong>There are error(s)in your form!</strong></p>' . $error . '</div>';
	} else {
		$link = new mysqli("176.32.230.48", "cl59-alexsb", "g-Rtx!fG^", "cl59-alexsb");
		
		if (!$link || $link->connect_errno) {
			die("Database Connection Error");
		}
		
		$query = "INSERT INTO announcements (Title, Body) VALUES ('$_POST[announcementTitle]', '$_POST[announcementBody]');";
		
		$result = $link->query($query);
		
		// var_dump($result);
		
		if ($result === false) {
			$error = "Could not add row to database.";
		}
	}
}

echo $error;

?>
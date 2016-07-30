<?php

$error = "";
$success = "";

if ($_POST) {
	if (!$_POST["sessionName"]) {
		$error .= "Session Name Required.<br>";
	}
	if (!$_POST["sessionHall"]) {
		$error .= "Session Hall Required. <br>";
	}
	if (!$_POST["sessionStartTime"]) {
		$error .= "Session Start Time Required. <br>";
	}
	if (!$_POST["sessionEndTime"]) {
		$error .= "Session End Time Required. <br>";
	}
	if (!$_POST["sessionDate"]) {
		$error .= "Session Date Required. <br>";
	}
	if (!$_POST["sessionDescription"]) {
		$error .= "Session Description Required. <br>";
	}
	if (!$_POST["sessionSpeakerName"]) {
		$error .= "Session Speaker Name Required. <br>";
	}
	if (!$_POST["sessionSpeakerPosition"]) {
		$error .= "Session Speaker Position Required. <br>";
	}
	if (!$_POST["sessionSpeakerBio"]) {
		$error .= "Session Speaker Bio Required. <br>";
	}
	
	if ($error != "") {
		$error = '<div class="alert alert-danger" role="alert"><p><strong>There are error(s) in your form !</strong></p>' . $error . '</div>';
	} else {
		$link = new mysqli("176.32.230.48", "cl59-alexsb", "g-Rtx!fG^", "cl59-alexsb");
		
		if (!$link || $link->connect_errno) {
			die("Database Connection Error");
		}
		
		$speakerMobile = ($_POST["sessionSpeakerMobile"]) ? ", SpeakerMobile" : "";
		$speakerLinkedin = ($_POST["sessionSpeakerLinkedin"]) ? ", SpeakerLinkedin" : "";
		
		$speakerMobileValue = ($_POST["sessionSpeakerMobile"]) ? ", '$_POST[sessionSpeakerMobile]'" : "";
		$speakerLinkedinValue = ($_POST["sessionSpeakerLinkedin"]) ? ", '$_POST[sessionSpeakerLinkedin]'" : "";
		
		$query = "INSERT INTO schedule (SessionName, SessionHall, SessionStartTime, SessionEndTime, SessionDate,
			SessionDescription, SpeakerName, SpeakerPosition, SpeakerBio, SpeakerEmail $speakerMobile $speakerLinkedin) VALUES (
			'$_POST[sessionName]', '$_POST[sessionHall]', STR_TO_DATE('$_POST[sessionStartTime]', '%H:%i'), STR_TO_DATE('$_POST[sessionEndTime]', '%H:%i'),
			STR_TO_DATE('$_POST[sessionDate]', '%d-%m-%Y'),	'$_POST[sessionDescription]', '$_POST[sessionSpeakerName]', '$_POST[sessionSpeakerPosition]',
			'$_POST[sessionSpeakerBio]', '$_POST[sessionSpeakerEmail]' $speakerMobileValue $speakerLinkedinValue);";
			
		$result = $link->query($query);
		
		// var_dump($result);
		
		if ($result === false) {
			$error = "Could not add row to database.";
		} else {
			$success = "Session added successfully !";
		}
	}
}

echo $error . $success;

?>
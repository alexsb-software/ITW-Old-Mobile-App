<?php

$error = "";

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
		$error = '<div class="alert alert-danger" role="alert"><p><strong>there are error(s)in your form!</strong></p>' . $error . '</div>';
	} else {
		$link = mysqli_connect("176.32.230.48", "cl59-alexsb", "g-Rtx!fG^", "cl59-alexsb");
		
		if (!$link) {
			die("Database Connection Error");
		}
		
		$speakerMobile = isset($_POST["sessionSpeakerMobile"]) ? ", SpeakerMobile" : "";
		$speakerLinkedin = isset($_POST["sessionSpeakerLinkedin"]) ? ", SpeakerLinkedin" : "";
		$speakerMobileValue = isset($_POST["sessionSpeakerMobile"]) ? ", $_POST['sessionSpeakerMobile']" : "";
		$speakerLinkedinValue = isset($_POST["sessionSpeakerLinkedin"]) ? ", $_POST['sessionSpeakerLinkedin']" : "";
		
		$query = "INSERT INTO schedule (SessionName, SessionHall, SessionStartTime, SessionEndTime, SessionDate
			SessionDescription, SpeakerName, SpeakerPosition, SpeakerBio, SpeakerEmail $speakerMobile $speakerLinkedin) VALUES (
			$_POST['sessionName'], $_POST['sessionHall'], $_POST['sessionStartTime'], $_POST['sessionEndTime'], $_POST['sessionDate'], $_POST['sessionDescription'], 
			$_POST['sessionSpeakerName'], $_POST['sessionSpeakerPosition'], $_POST['sessionSpeakerBio'], $_POST['sessionSpeakerEmail']
			$speakerMobileValue $speakerLinkedinValue);";
			
		$result = mysqli_query($link, $query);
		$row = mysqli_fetch_array($result);
		
		if (!isset($row)) {
			$error = "Could not add row to database.";
		}	
	}
}

echo $error;

?>
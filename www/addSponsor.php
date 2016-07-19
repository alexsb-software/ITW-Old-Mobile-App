<?php

$error = "";

if ($_POST) {
	if (!$_POST["sponsorName"]) {
		$error .= "Sponsor Name Required.<br>";
	}
	if (!$_POST["sponsorType"]) {
		$error .= "Sponsor Type Required. <br>";
	}
	
	if ($error != "") {
		$error = '<div class="alert alert-danger" role="alert"><p><strong>there are error(s)in your form!</strong></p>' . $error . '</div>';
	} else {
		$link = mysqli_connect("176.32.230.48", "cl59-alexsb", "g-Rtx!fG^", "cl59-alexsb");
		
		if (!$link) {
			die("Database Connection Error");
		}
		
		$sponsorImageUrl = isset($_POST["sponsorImageUrl"]) ? ", SponsorImageUrl" : "";
		$sponsorWebsite = isset($_POST["sponsorWebsite"]) ? ", SponsorWebsite" : ""; 
		$sponsorImageUrlValue = isset($_POST["sponsorImageUrl"]) ? $_POST["sponsorImageUrl"] : "";
		$sponsorWebsiteValue = isset($_POST["sponsorWebsite"]) ? $_POST["sponsorWebsite"] : "";
		
		$query = "INSERT INTO sponsors (SponsorName, SponsorType $sponsorImageUrl $sponsorWebsite) VALUES 
			($_POST['sponsorName'], $_POST['sponsorType'] $sponsorImageUrlValue $sponsorWebsiteValue);";
			
		$result = mysqli_query($link, $query);
		$row = mysqli_fetch_array($result);
		
		if (!isset($row)) {
			$error = "Could not add row to database.";
		}	
	}
}

echo $error;

?>
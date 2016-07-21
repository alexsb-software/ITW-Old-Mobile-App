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
		$error = '<div class="alert alert-danger" role="alert"><p><strong>There are error(s)in your form!</strong></p>' . $error . '</div>';
	} else {
		$link = new mysqli("176.32.230.48", "cl59-alexsb", "g-Rtx!fG^", "cl59-alexsb");
		
		if (!$link || $link->connect_errno) {
			die("Database Connection Error");
		}
		
		$sponsorImageUrl = ($_POST["sponsorImageUrl"]) ? ", SponsorImageUrl" : "";
		$sponsorWebsite = ($_POST["sponsorWebsite"]) ? ", SponsorWebsite" : ""; 
		$sponsorImageUrlValue = ($_POST["sponsorImageUrl"]) ? ", '$_POST[sponsorImageUrl]'" : "";
		$sponsorWebsiteValue = ($_POST["sponsorWebsite"]) ? ", '$_POST[sponsorWebsite]'" : "";
		
		$query = "INSERT INTO sponsors (SponsorName, SponsorType $sponsorImageUrl $sponsorWebsite) VALUES 
			('$_POST[sponsorName]', '$_POST[sponsorType]' $sponsorImageUrlValue $sponsorWebsiteValue);";
			
		$result = $link->query($query);
		
		// var_dump($result);
		
		if ($result === false) {
			$error = "Could not add row to database.";
		}
	}
}

echo $error;

?>
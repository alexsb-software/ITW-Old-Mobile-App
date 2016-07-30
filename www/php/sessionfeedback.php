<?php
$error   = "";
$success = "";

$link = new mysqli("176.32.230.48", "cl59-alexsb", "g-Rtx!fG^", "cl59-alexsb");

if (!$link || $link->connect_errno) {
    die("Database Connection Error");
}

$query = "INSERT INTO sessionfeedback (useremail, SessionId, TimingSuitable, TopicInteresting, SessionEnoughInformation,
    ContentValuable, SpeakerKnowledgeable, SpeakerPresentationSkills, DurationEnough, SessionRating, ExpectAdditionalInformation,
    SuggestionsOtherSessions, SuggestionsAndComments) VALUES ('$_POST[useremail]', $_POST[sessionid], '$_POST[TimingSuitable]',
    '$_POST[TopicInteresting]', '$_POST[SessionEnoughInformation]', '$_POST[ContentValuable]', '$_POST[SpeakerKnowledgeable]',
    '$_POST[SpeakerPresentationSkills]', '$_POST[DurationEnough]', '$_POST[SessionRating]', '$_POST[ExpectAdditionalInformation]',
    '$_POST[SuggestionsOtherSessions]', '$_POST[SuggestionsAndComments]');";

$result = $link->query($query);

if ($result === false) {
    $error = "Could not add feedback to database.";
} else {
    $success = "Feedback received successfully !";
}

echo $error . $success;
?>
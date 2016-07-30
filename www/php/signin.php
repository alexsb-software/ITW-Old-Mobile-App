<?php
$error   = "";
$success = "";
$email = "";
if ($_POST) {
    if (!$_POST["email"]) {
        $error .= "An email address is required.<br>";
    } else {
        $email = filter_var($_POST["email"], FILTER_SANITIZE_EMAIL);
    }
    if (!$_POST["password"]) {
        $error .= "The password is required.<br>";
    }
    if ($_POST['email'] && filter_var($email, FILTER_VALIDATE_EMAIL) === false) {
        $error .= "The email address isn't valid.<br>";
    }
    if ($error != "") {
        $error = '<div class="alert alert-danger" role="alert"><p><strong>there are error(s)in your form!</strong></p>' . $error . '</div>';
    } else {
        $link = mysqli_connect("176.32.230.48", "cl59-alexsb", "g-Rtx!fG^", "cl59-alexsb");
        if (mysqli_connect_error()) {
            die("Database Connection Error");
        }
        $query  = "SELECT * FROM users WHERE email = '$email'";
        $result = mysqli_query($link, $query);
        $row    = mysqli_fetch_array($result);
        if (isset($row)) {
            $hashedPassword = md5(md5($row['id']) . $_POST['password']);
            if ($hashedPassword == $row['password']) {
                $_SESSION['id'] = $row['id'];
                $success        = "1";
            } else {
                $error = "That email/password combination could not be found.";
            }
        } else {
            $error = "That email/password combination could not be found.";
        }
    }
}
echo $error . $success;
?>
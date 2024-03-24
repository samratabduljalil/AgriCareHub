<?php
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

// Handle preflight requests (OPTIONS)
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
  exit;
}

$server = "localhost";
$user = "root";
$pass = "";
$database = "user_registration";

$conn = mysqli_connect($server, $user, $pass, $database);

if (!$conn) {
    die("<script>alert('Connection Failed.')</script>");
}

$username = $_POST['username'];
$email = $_POST['email'];
$gender = $_POST['gender'];
$password = $_POST['password'];

$sql = "INSERT INTO `users` (`username`, `email`, `gender`, `password`) VALUES ('$username', '$email', '$gender', '$password')";

if ($conn->query($sql) === TRUE) {
  echo json_encode("New record created successfully");
} else {
  echo json_encode("Error: " . $sql . "<br>" . $conn->error);
}

$conn->close();

?>

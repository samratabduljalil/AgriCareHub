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


$email = $_POST['email'];
$password = $_POST['password'];

$sql = "SELECT * FROM `users` WHERE `email` = '$email' AND `password` = '$password'";


$result = $conn->query($sql);

if ($result->num_rows > 0) {
  // Login successful
  echo json_encode(["success" => true]);
} else {
  // Login failed
  echo json_encode(["success" => false, "message" => "Invalid email or password"]);
}

$conn->close();

?>

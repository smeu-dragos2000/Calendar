<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
$conn = new mysqli('localhost','root','','user');
if(isset($_POST['name']))
{
  $sql = "INSERT INTO userdata (firstname, email, mobile, password)
  VALUES ('".$_POST['name']."', '".$_POST['email']."', ".$_POST['phone'].", ".$_POST['password'].")";
  if ($conn->query($sql) === TRUE) {
    $myJSON = json_encode("New user created successfully");
  } else {
    $myArr = "Error: " . $sql . "<br>" . $conn->error;
                $myJSON = json_encode($myArr);

  }
         echo $myJSON;
}
?>

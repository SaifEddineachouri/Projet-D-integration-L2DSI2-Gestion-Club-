<?php
require 'database.php';
$postdata = file_get_contents('php://input');

if(isset($postdata) && !empty($postdata))
{
	$request = json_decode($postdata,true);
	// Validate.
	if(trim($request['titre']) === '' || trim($request['Date_Deb']) === '' || trim($request['Date_Fin'])==='' )
	{
		return http_response_code(400);
	}
	$id = mysqli_real_escape_string($mysqli, (int)$request['id']);
	$titre = mysqli_real_escape_string($mysqli, trim($request['titre']));
    $Date_Deb = mysqli_real_escape_string($mysqli, trim($request['Date_Deb']));
    $Date_Fin = mysqli_real_escape_string($mysqli, trim($request['Date_Fin']));
    

	$sql = "UPDATE meeting SET titre='$titre',Date_Deb='$Date_Deb' ,Date_Fin = '$Date_Fin' WHERE id = $id";
	
	if($mysqli->query($sql))
	{
		http_response_code(204);
	}
	else
	{
		return http_response_code(422);
	}
}
<?php
require 'database.php';
$postdata = file_get_contents('php://input');

if(isset($postdata) && !empty($postdata))
{
	$request = json_decode($postdata,true);
	// Validate.
	if(trim($request['titre']) === '' || trim($request['Capacity']) === '' || trim($request['Lieu']) === '' || trim($request['Date']) === '')
	{
		return http_response_code(400);
	}
    $id = mysqli_real_escape_string($mysqli, (int)$request['id']);
	$titre = mysqli_real_escape_string($mysqli, trim($request['titre']));
    $capacity = mysqli_real_escape_string($mysqli, trim($request['Capacity']));
    $lieu = mysqli_real_escape_string($mysqli, trim($request['Lieu']));
    $Date = mysqli_real_escape_string($mysqli, trim($request['Date']));



	$sql = "UPDATE event SET titre='$titre',capacity='$capacity' ,lieu = '$lieu',Date='$Date' WHERE id = $id ;";
	
	if($mysqli->query($sql))
	{
		http_response_code(204);
	}
	else
	{
		return http_response_code(422);
	}
}
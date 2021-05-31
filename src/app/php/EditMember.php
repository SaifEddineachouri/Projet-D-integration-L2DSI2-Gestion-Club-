<?php
require 'database.php';
$postdata = file_get_contents('php://input');

if(isset($postdata) && !empty($postdata))
{
	$request = json_decode($postdata,true);
	// Validate.
	if(trim($request['name']) === '' || trim($request['dateNaissance']) === ''  || trim($request['password']) === '' || trim($request['email']) === '' || trim($request['departement']) === '' || trim($request['Poste']) === '')
	{
		return http_response_code(400);
	}
	$id = mysqli_real_escape_string($mysqli, (int)$request['id']);
	$name = mysqli_real_escape_string($mysqli, trim($request['name']));
	$dateNaissance=  mysqli_real_escape_string($mysqli, trim($request['dateNaissance']));
	$password = mysqli_real_escape_string($mysqli, trim($request['password']));
    $email = mysqli_real_escape_string($mysqli, trim($request['email']));
    $departement = mysqli_real_escape_string($mysqli, trim($request['departement']));
    $Poste = mysqli_real_escape_string($mysqli, trim($request['Poste']));

	$sql = "UPDATE member SET name='$name',dateNaissance='$dateNaissance',password='$password',email='$email' ,departement = '$departement' ,Poste = '$Poste' WHERE id = $id";
	
	if($mysqli->query($sql))
	{
		http_response_code(204);
	}
	else
	{
		return http_response_code(422);
	}
}
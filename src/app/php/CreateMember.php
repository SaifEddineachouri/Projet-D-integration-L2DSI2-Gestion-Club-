<?php
include 'database.php';
$postdata = file_get_contents("php://input");
if(isset($postdata) && !empty($postdata))
{
	$request = json_decode($postdata,true);
	// Validate.
	if(trim($request['name']) === '' || trim($request['dateNaissance']) === ''  || trim($request['password']) === '' || trim($request['email']) === '' || trim($request['Poste']) === '')
	{
		return http_response_code(400);
	}
	$name = mysqli_real_escape_string($mysqli, trim($request['name']));
	$dateNaissance=  mysqli_real_escape_string($mysqli, trim($request['dateNaissance']));
	$password = mysqli_real_escape_string($mysqli, trim($request['password']));
    $email = mysqli_real_escape_string($mysqli, trim($request['email']));
	$departement = mysqli_real_escape_string($mysqli, trim($request['departement']));
    $Poste = mysqli_real_escape_string($mysqli, trim($request['Poste']));
    

	$sql = "INSERT INTO member (id,name,dateNaissance,password,email,departement,Poste) VALUES (null,'$name','$dateNaissance','$password','$email','$departement','$Poste');";
	if($mysqli->query($sql))
	{
		http_response_code(201);
		$member = [
		'id' => mysqli_insert_id($mysqli),
        'name' => $name,
		'dateNaissance'=> $dateNaissance,
		'password' => $password,
        'email' => $email,
        'departement' => $departement,
        'Poste' => $Poste];


		echo json_encode($member);
	}
	else
	{
		http_response_code(422);
	}
}
<?php
include 'database.php';
$postdata = file_get_contents("php://input");
if(isset($postdata) && !empty($postdata))
{
	$request = json_decode($postdata,true);
	// Validate.
	if(trim($request['titre']) === '' || trim($request['Date_Deb']) === '' || trim($request['Date_Fin']) === '')
	{
		return http_response_code(400);
	}
	$titre = mysqli_real_escape_string($mysqli, trim($request['titre']));
    $Date_Deb = mysqli_real_escape_string($mysqli, trim($request['Date_Deb']));
    $Date_Fin = mysqli_real_escape_string($mysqli, trim($request['Date_Fin']));

	$sql = "INSERT INTO meeting (id,titre,Date_Deb,Date_Fin) VALUES (null,'$titre','$Date_Deb','$Date_Fin');";
	if($mysqli->query($sql))
	{
		http_response_code(201);
		$meeting = [
		'id' => mysqli_insert_id($mysqli),
        'titre' => $titre,
        'Date_Deb' =>$Date_Deb,
        'Date_Fin' =>$Date_Fin];

		echo json_encode($meeting);
	}
	else
	{
		http_response_code(422);
	}
}
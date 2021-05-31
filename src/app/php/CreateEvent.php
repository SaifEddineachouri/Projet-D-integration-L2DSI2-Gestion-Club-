<?php
include 'database.php';
$postdata = file_get_contents("php://input");
if(isset($postdata) && !empty($postdata))
{
	$request = json_decode($postdata,true);
	// Validate.
	if(trim($request['titre']) === '' || trim($request['Capacity']) === '' || trim($request['Lieu']) === '' || trim($request['Date']) === '')
	{
		return http_response_code(400);
	}
	$titre = mysqli_real_escape_string($mysqli, trim($request['titre']));
    $capacity = mysqli_real_escape_string($mysqli, trim($request['Capacity']));
    $lieu = mysqli_real_escape_string($mysqli, trim($request['Lieu']));
    $Date = mysqli_real_escape_string($mysqli, trim($request['Date']));


	$sql = "INSERT INTO event (id,titre,capacity,lieu,Date) VALUES (null,'$titre','$capacity','$lieu','$Date');";
	if($mysqli->query($sql))
	{
		http_response_code(201);
		$event = [
		'id' => mysqli_insert_id($mysqli),
        'titre' => $titre,
        'capacity' =>$capacity,
        'lieu' =>$lieu,
        'Date' =>$Date
    ];

		echo json_encode($event);
	}
	else
	{
		http_response_code(422);
	}
}
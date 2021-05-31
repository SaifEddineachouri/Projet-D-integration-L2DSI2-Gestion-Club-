<?php
include 'database.php';
$postdata = file_get_contents("php://input");
if(isset($postdata) && !empty($postdata))
{
	$request = json_decode($postdata,true);
	// Validate.
	if(trim($request['titre']) === '' || trim($request['DatePj']) === '')
	{
		return http_response_code(400);
	}

	$titre = mysqli_real_escape_string($mysqli, trim($request['titre']));
    $DatePj = mysqli_real_escape_string($mysqli, trim($request['DatePj']));


	$sql = "INSERT INTO listtodo (id,titre,DatePj) VALUES (null,'$titre','$DatePj');";
	if($mysqli->query($sql))
	{
		http_response_code(201);
		$listtodo = [
		'id' => mysqli_insert_id($mysqli),
        'titre' => $titre,
        'DatePj' =>$DatePj
    ];

		echo json_encode($listtodo);
	}
	else
	{
		http_response_code(422);
	}
}
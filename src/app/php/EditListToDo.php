<?php
require 'database.php';
$postdata = file_get_contents('php://input');

if(isset($postdata) && !empty($postdata))
{
	$request = json_decode($postdata,true);
	// Validate.
	if(trim($request['titre']) === '' ||  trim($request['DatePj']) === '')
	{
		return http_response_code(400);
	}
    $id = mysqli_real_escape_string($mysqli, (int)$request['id']);
	$titre = mysqli_real_escape_string($mysqli, trim($request['titre']));
    $DatePj = mysqli_real_escape_string($mysqli, trim($request['DatePj']));
    



	$sql = "UPDATE listtodo SET titre='$titre',DatePj='$DatePj' WHERE id = $id ;";
	
	if($mysqli->query($sql))
	{
		http_response_code(204);
	}
	else
	{
		return http_response_code(422);
	}
}
<?php
include 'database.php';
$ListToDo = [];

$sql = "SELECT * FROM listtodo";
if($result = $mysqli->query($sql))
{
	$i = 0;
	while($row = $result->fetch_assoc())
	{
		$ListToDo[$i]['id'] = $row['id'];
		$ListToDo[$i]['titre'] = $row['titre'];
        $ListToDo[$i]['DatePj'] = $row['DatePj'];
        
		$i++;
	}
	echo json_encode($ListToDo);
}
else
{
	http_response_code(404);
}
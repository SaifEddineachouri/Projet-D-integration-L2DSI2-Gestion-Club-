<?php
include 'database.php';
$Events = [];

$sql = "SELECT * FROM event";
if($result = $mysqli->query($sql))
{
	$i = 0;
	while($row = $result->fetch_assoc())
	{
		$Events[$i]['id'] = $row['id'];
		$Events[$i]['titre'] = $row['titre'];
        $Events[$i]['Capacity'] = $row['capacity'];
        $Events[$i]['Lieu'] = $row['lieu'];
        $Events[$i]['Date'] = $row['Date'];
        
		$i++;
	}
	echo json_encode($Events);
}
else
{
	http_response_code(404);
}
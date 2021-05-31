<?php
include 'database.php';
$Meetings = [];

$sql = "SELECT * FROM meeting";
if($result = $mysqli->query($sql))
{
	$i = 0;
	while($row = $result->fetch_assoc())
	{
		$Meetings[$i]['id'] = $row['id'];
		$Meetings[$i]['titre'] = $row['titre'];
        $Meetings[$i]['Date_Deb'] = $row['Date_Deb'];
        $Meetings[$i]['Date_Fin'] = $row['Date_Fin'];
		$i++;
	}
	echo json_encode($Meetings);
}
else
{
	http_response_code(404);
}
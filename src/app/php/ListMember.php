<?php
include 'database.php';
$members = [];

$sql = "SELECT * FROM member";
if($result = $mysqli->query($sql))
{
	$i = 0;
	while($row = $result->fetch_assoc())
	{
		$members[$i]['id'] = $row['id'];
		$members[$i]['name'] = $row['name'];
		$members[$i]['dateNaissance']= $row['dateNaissance'];
		$members[$i]['password'] = $row['password'];
        $members[$i]['email'] = $row['email'];
        $members[$i]['departement'] = $row['departement'];
        $members[$i]['Poste'] = $row['Poste'];
		$i++;
	}
	echo json_encode($members);
}
else
{
	http_response_code(404);
}
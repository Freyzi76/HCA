<?php

session_start();



?>




<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="js/deezer-search.js"></script>
    <script src="js/jquery.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.8.16/jquery-ui.min.js"></script>


    <title>HCA</title>
</head>
<body>


<div id = "deezer" >

<input type="text" id="deezer_search">
<button onclick = "deezerSearch()">search</button>

</div> 






<div id="result-deezer-search">
    <ul class="list-group-deezer">

    </ul>
</div>






<div id = "racine dz" >
<?php

include ('app/DeezerApp.html');

?>
</div> 


    
</body>
</html>


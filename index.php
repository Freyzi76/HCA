<?php
   header('Access-Control-Allow-Origin: *');
?>

<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link rel="stylesheet" href="css/index.css">

    <link rel="stylesheet" href="css/all.css">

    <script src="js/jquery.js"></script>

    <script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.8.16/jquery-ui.min.js"></script>

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.1/css/all.min.css">

    <link rel="stylesheet" href="DeezerApp/css/deezer-app.css">

    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Rubik&amp;display=swap">

    


    <title>HCA</title>
</head>
<body >







<div id="deezer" class="deezer_app el" >
  

    <div class="deezer_app_menu">



            <div class="deezer_app_menu_home">

                <button type="button" class="deezer_btn_menu "><i class="fab fa-deezer"></i></button>

            </div>

        

            <div class="deezer_app_menu_search_bar">

                <input type="text" id="deezer_search">

            </div>

            <div id="deezer_app_menu_search_bar_close">

                <button class="deezer_btn_menu " onclick = "deezerSearchClose()"><i class="fas fa-times"></i></button>

            </div>

            <div id="deezer_app_menu_search_btn">

                <button class="deezer_btn_menu " onclick = "deezerSearch()"><i class="fas fa-search"></i></button>

            </div>



            <div class="deezer_app_menu_setting">

                <button type="button" class="deezer_btn_menu deezer_btn_menu_R"><i class="fas fa-cog"></i></button>

            </div>
        

    </div>




    <div id="test" class="deezer_app_home menu_anim">

        <div id="result-deezer-search" class="menu_item">

                <ul class="deezer_list_result_search">

                    <li class="list-group-deezer-item">

                        <p>#</p>

                        <p>Titre</p>

                        <p>Artiste</p>

                        <p>Album</p>

                        <p></p>
            
                </ul>

                <button type="button" onclick="homeScroll()">Suivant</button>

        </div>

        

        <div id="result-deezer-artist" class="menu_item">

            <ul class="deezer_list_result_artist">
                test1
            </ul>

        </div>

        <div id="result-deezer-album" class="menu_item">

            <ul class="deezer_list_result_search">
            test2
            </ul>

        </div>




    </div>


    


    <div class="deezer_app_player">

    <div class="deezer_app_player_control">

        <div id="deezer_app_player_img">
            <i class="fab fa-deezer deezer_app_player_img_nosong"></i>
        </div>

        <div id="deezer_app_player_info_title">



        </div>

        <div id="deezer_app_player_info_artist">



        </div>


        <div id="deezer_app_player_actual_time" class="deezer_app_player_time_item">

        </div>

        <div id="deezer_app_player_total_time" class="deezer_app_player_time_item">

        </div>

        <div id="deezer_app_player_slider_seek" class="progressbarplay" >
            <input id="deezer_app_player_slider" type="range" min="0" max="100" onchange="change_duration()">
        </div>

        <div id="deezer_app_player_controler">

            <button type="button" class="deezer_app_player_controler_prev" onclick="DZ.player.prev(); timeBeforeRefresh();"><i class="fas fa-step-backward"></i></button>
            <button type="button" class="deezer_app_player_controler_play" onclick="playPause();"><i class="fas fa-play"></i></button>
            <button type="button" class="deezer_app_player_controler_next" onclick="DZ.player.next(); timeBeforeRefresh();"><i class="fas fa-step-forward"></i></button>

        </div>


    </div>

    <div id="dz-root"></div>
    <div id="player" style="display:none;"></div>
    <script src="https://e-cdns-files.dzcdn.net/js/min/dz-v00401525.js"></script>

    <script>

        DZ.init({
		appId   : '491462' , 
		channelUrl : 'http://localhost/channel.php', 
        player : {
			container: 'player',
			width : 300,
			height : 300,
			format : 'square',
			onload : function(){}
		}
	});

    DZ.ready(function(sdk_options){
	console.log('DZ SDK is ready', sdk_options);

    
    DZ.login(function(response) {
        if (response.authResponse) {
            console.log('Welcome!  Fetching your information.... ');
            DZ.api('/user/me', function(response) {
                console.log('Good to see you, ' + response.name + '.');
            });
        } else {
            console.log('User cancelled login or did not fully authorize.');
        }
    }, {perms: 'basic_access,email'});
    });

    DZ.getLoginStatus(function(response) {
	if (response.authResponse) {
		// logged in and connected user, someone you know
	} else {
		// no user session available, someone you dont know
	}
});


</script>

    </div>





</div>






    
</body>
</html>



<script src="DeezerApp/js/deezer_search_anim.js"></script>
<script src="DeezerApp/js/deezer_home.js"></script>
<script src="DeezerApp/js/deezer_play.js"></script>

<script>homeScrollReset();</script>

<script src="js/moov_window.js"></script>



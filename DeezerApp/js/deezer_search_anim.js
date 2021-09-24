function deezerSearch() {

   var deezerBarStatus = $('#deezer_search').css('display');
   var deezerbtnStatus = $('#deezer_app_menu_search_bar_close').css('display');
   

   if(deezerBarStatus === 'none') {
    console.log('is display none');

    document.getElementById('deezer_search').style.display = 'block';
    document.getElementById('deezer_app_menu_search_bar_close').style.display = 'block';
    document.getElementById('deezer_app_menu_search_btn').style.marginLeft = "10px";

   }else{


    var search = $('#deezer_search').val();


    var url = "https://api.deezer.com/search?q=" + search + "&index=50"

    $.ajax({
        type: 'GET',
        url: url,
        headers: {
            appId  : '491462',
        
        }
        
    }).done(function(data) { 

        resetTrackList();

        $('.song').remove();
        
        
        data.data.forEach( function(data) {


            let li = document.createElement('li');
            
            li.classList.add('list-group-deezer-item');

            li.classList.add('song');

            li.id = data.id;
            
            
            pushTrackList(data.id);


            document.querySelector('.deezer_list_result_search').appendChild(li);

            
            
            $('<button type="button" onclick="getTrackPositionInTracklist(' + data.id + '), timeBeforeRefresh(); return false;"><i class="fa fa-play"></i></button>').appendTo('#' + data.id);
            
            $('<p>' + data.title.split("(")[0] + '</p>').appendTo('#' + data.id);


            $('<p>' + data.artist.name.split("(")[0] + '</p>').appendTo('#' + data.id);
            $('<p>' + data.album.title.split("(")[0] + '</p>').appendTo('#' + data.id);
            $('<button type="button" onclick="DZ.player.playAlbum(' + data.album.id + '); return false;"><i class="fas fa-ellipsis-v"></i></button>').appendTo('#' + data.id);
            

            homeScrollReset();


        });



    });

   

  }
   



}


function deezerSearchClose() {

    var deezerBarStatus = $('#deezer_search').css('display');
    var deezerbtnStatus = $('#deezer_app_menu_search_bar_close').css('display');
    
 
    if(deezerBarStatus === 'block') {
     console.log('is display block');
 
     document.getElementById('deezer_search').style.display = 'none';
     document.getElementById('deezer_app_menu_search_bar_close').style.display = 'none';
     document.getElementById('deezer_app_menu_search_btn').style.marginLeft = "565px";
 
    }
    
 
 
 }
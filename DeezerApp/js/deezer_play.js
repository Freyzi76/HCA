idTackIsPlaying = null;

arrayTrackListSearchResult = [];

arrayTrackListSearchResultlength = null;

arrayTrackList = [];

trackPositionNumberInList = null;

controlSeek = false;

getWidthSliderSeekPourcent = null;

progressBar = null;

dataPlayer = null;

trackCurrentTimeItem = null;

whileNumber = null;


function pushTrackList(trackId) {
   arrayTrackListSearchResult.push(trackId);
};

function resetTrackList() {
    arrayTrackListSearchResult.splice(0);
};


function timeBeforeRefresh() {
    setTimeout(function(){refreshPlayer()}, 1500);
};

function playTrack(playTrackId) {

    DZ.player.playTracks([playTrackId]);

};

function refreshPlayer() {

    $('.deezer_app_player_img_nosong').remove();
    $('.deezer_app_player_img_result').remove();
    $('.deezer_app_player_info_tilte_result').remove();
    $('.deezer_app_player_info_artist_result').remove();
    timeTrackIsDefine = false;


    DZ.Event.subscribe('current_track', function(arg){
        console.log('current_track', arg.index, arg.track.title, arg.track.album.title);
    });

    DZ.Event.subscribe('player_position', function(arg){
        
            getWidthSliderSeekPourcent = (100*arg[0]/arg[1]);

            progressBar = document.getElementById("deezer_app_player_slider"); 

            progressBar.value = getWidthSliderSeekPourcent;

                if(timeTrackIsDefine === false) {

                    trackCurrentTimeItem = $('#deezer_app_player_actual_time').get(0);
                    trackTotalTimeItem = $('#deezer_app_player_total_time').get(0);

                    trackTotalMin = Math.floor(arg[1] / 60);
                    trackTotalSec = Math.floor(arg[1] % 60);

                    if(trackTotalSec < 10) {
                        trackTotalSec = '0' + trackTotalSec;
                    };

                    trackTotalTimeItem.innerText = trackTotalMin + ' : ' + trackTotalSec;

                    timeTrackIsDefine = true;
                };

                    trackCurrentMin = Math.floor(arg[0] / 60);
                    trackCurrentSec = Math.floor(arg[0] % 60);

                        if(trackCurrentSec < 10) {
                            trackCurrentSec = '0' + trackCurrentSec;
                        }

                            trackCurrentTimeItem.innerText = trackCurrentMin + ' : ' + trackCurrentSec;



    });

    DZ.Event.subscribe('track_end', function() {
        console.log(' track finish ');
        nextTrackAuto();
    });

    dataPlayer = DZ.player.getCurrentTrack();

    idTackIsPlaying = dataPlayer.id;

    var imgUrl = 'https://api.deezer.com/album/' + dataPlayer.album.id + '/image';

    var trackInfoTitle = dataPlayer.title.split("(")[0];

    var trackInfoArtist = dataPlayer.artist.name.split("(")[0] + ' - ' + dataPlayer.album.title.split("(")[0];


    //$('<p>' + data.title.split("(")[0] + '</p>').appendTo('#' + data.id);

    $('<img class="deezer_app_player_img_result" src="' + imgUrl + '">').appendTo('#deezer_app_player_img');
    $('<p class="deezer_app_player_info_tilte_result deezer_app_player_info_item">' + trackInfoTitle + '</p>').appendTo('#deezer_app_player_info_title');
    $('<p class="deezer_app_player_info_artist_result deezer_app_player_info_item">' + trackInfoArtist + '</p>').appendTo('#deezer_app_player_info_artist');

};


function nextTrackAuto() {

    arrayTrackListSearchResultlength = arrayTrackListSearchResult.length - 1;


    var whileNumber = 0;


    while (whileNumber < arrayTrackListSearchResultlength) {


        if(idTackIsPlaying == arrayTrackListSearchResult[whileNumber]) {


            var nextTrack = arrayTrackListSearchResult[whileNumber + 1];


            if(nextTrack !== ' '){
                DZ.player.playTracks([nextTrack]);
                timeBeforeRefresh();
            } 
            else{
            };

        };


        whileNumber++;

      };

};



function getTrackPositionInTracklist(idTrackToPlay) {

    arrayTrackList.splice(0);

    whileNumber = 0;

    arrayTrackListSearchResultlength = arrayTrackListSearchResult.length;

    while (whileNumber < arrayTrackListSearchResultlength) {

        if(idTrackToPlay == arrayTrackListSearchResult[whileNumber]){
            console.log('if' + whileNumber);
            break;
        };

        console.log('before add' + whileNumber);
        whileNumber++;
        console.log('after add' + whileNumber);
    };

    createTrackList();

};


function createTrackList() {

    while (whileNumber < arrayTrackListSearchResultlength) {


        var nextTrack = arrayTrackListSearchResult[whileNumber];

        arrayTrackList.push(nextTrack);

        whileNumber++;

    };

    DZ.player.playTracks(arrayTrackList);

    console.log(arrayTrackList);

};



function change_duration() {

    var currentVal = progressBar.value;
    DZ.player.seek(currentVal);

};


function playPause() {

    if(DZ.player.isPlaying() == true) {

        DZ.player.pause();
        $(".deezer_app_player_controler_play").find("i").removeClass("fa-pause").addClass("fa-play");
        var test = $('#' + idTackIsPlaying ).find("button").addClass("white");

    }
    else {

        DZ.player.play();
        $(".deezer_app_player_controler_play").find("i").removeClass("fa-play").addClass("fa-pause");

    };

    

};

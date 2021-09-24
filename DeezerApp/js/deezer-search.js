

function deezerSearch() {

    var search = $('#deezer_search').val();

    var url = "https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=" + search

    console.log(search);

    $.ajax({
        type: 'GET',
        url: url,
        headers: {
            appId  : '491462',
        }
        
    }).done(function(data) { 

        
        data.data.forEach( function(data) {


            let li = document.createElement('li');
            
            li.classList.add('list-group-deezer-item');

            li.id = data.id;

            li.textContent = data.title;
            
            li.onclick = function() {
                window.location.href = data.link;
            };


            document.querySelector('.list-group-deezer').appendChild(li);

            const img = document.createElement("img");

            img.src = data.album.cover_small;

            document.getElementById(data.id).appendChild(img);


            //console.log(data.album.cover_small);


        });



    });

};

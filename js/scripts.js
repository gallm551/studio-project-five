window.addEventListener('load', ()=> {
    // All Values Go Right Under Here!
    const APIKEY='920fc74187502041b4efd187254f4fbc';
    proxy = 'https://cors-anywhere.herokuapp.com/',
    userInput = document.querySelector('#search'),
    dataWrapper1 = document.querySelector('.songname1'),
    dataWrapper2 = document.querySelector('.albumname1'),
    dataWrapper3 = document.querySelector('.artistname1'),
    
    dataWrapper4 = document.querySelector('.songname2'),
    dataWrapper5 = document.querySelector('.albumname2'),
    dataWrapper6 = document.querySelector('.artistname2'),
    
    dataWrapper7 = document.querySelector('.songname3'),
    dataWrapper8 = document.querySelector('.albumname3'),
    dataWrapper9 = document.querySelector('.artistname3'),

    musixForm = document.querySelector('#musixform');
    
    //Begin findTrack !
    let findTrack;
    
    musixForm.addEventListener('submit', getMusixInfo);

    //Begin Function !
    function getMusixInfo(event) {
        //Prevents auto-refresh of form...
        event.preventDefault();

        findTrack = userInput.value;
        //Permissions for the API!
        let api = `${proxy}https://api.musixmatch.com/ws/1.1/track.search?q_track=${findTrack}&s_track_rating=desc&apikey=${APIKEY}`;
        
        // Begin fetching the info from the API!
        fetch(api)
        .then(response => {
            return response.json();
        }).then(data => {
            console.log(data);
            //Telling what info to open up for the API!
            let tracklist = data.message.body.track_list;
            let firsttrack = tracklist[0].track;
            let secondtrack = tracklist[1].track;
            let thirdtrack = tracklist[2].track;

            let firsttrackrating = firsttrack.track_rating;
            let secondtrackrating = secondtrack.track_rating;
            let thirdtrackrating = thirdtrack.track_rating;

            //This prints the information pulled onto the site!
            dataWrapper1.innerHTML= " " + "Song: " + firsttrack.track_name;
            dataWrapper2.innerHTML= " " + "Album: " + firsttrack.album_name;
            dataWrapper3.innerHTML= " " + "Artist: " + firsttrack.artist_name;
            // Second listing
            dataWrapper4.innerHTML= " " + "Song: " + secondtrack.track_name;
            dataWrapper5.innerHTML= " " + "Album: " + secondtrack.album_name;
            dataWrapper6.innerHTML= " " + "Artist: " + secondtrack.artist_name;
            // Third Listing
            dataWrapper7.innerHTML= " " + "Song: " + thirdtrack.track_name;
            dataWrapper8.innerHTML= " " + "Album: " + thirdtrack.album_name;
            dataWrapper9.innerHTML= " " + "Artist: " + thirdtrack.artist_name;
        
        });
    
    }
});
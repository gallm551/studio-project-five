window.addEventListener('load', ()=> {
    // All Values Go Right Under Here!
    const APIKEY='920fc74187502041b4efd187254f4fbc';
    proxy = 'https://cors-anywhere.herokuapp.com/',
    userInput = document.querySelector('#search'),

    dataWrapper1 = document.querySelector('.songname1'),
    dataWrapper2 = document.querySelector('.albumname1'),
    dataWrapper3 = document.querySelector('.artistname1'),
    dataWrapperA1 = document.querySelector('.albumart1'),
    
    dataWrapper4 = document.querySelector('.songname2'),
    dataWrapper5 = document.querySelector('.albumname2'),
    dataWrapper6 = document.querySelector('.artistname2'),
    dataWrapperA2 = document.querySelector('.albumart2'),
    
    dataWrapper7 = document.querySelector('.songname3'),
    dataWrapper8 = document.querySelector('.albumname3'),
    dataWrapper9 = document.querySelector('.artistname3'),
    dataWrapperA3 = document.querySelector('.albumart3'),

    dataWrapper10 = document.querySelector('.songname4'),
    dataWrapper11 = document.querySelector('.albumname4'),
    dataWrapper12 = document.querySelector('.artistname4'),
    dataWrapperA4 = document.querySelector('.albumart4'),

    dataWrapper13 = document.querySelector('.songname5'),
    dataWrapper14 = document.querySelector('.albumname5'),
    dataWrapper15 = document.querySelector('.artistname5'),
    dataWrapperA5 = document.querySelector('.albumart5'),

    musixForm = document.querySelector('#musixform');
    
    //Begin findTrack!
    let findTrack;
    let findArt;
    
    musixForm.addEventListener('submit', getMusixInfo);

    //Begin Function!
    function getMusixInfo(event) {
        //Prevents auto-refresh of form...
        event.preventDefault();

        // This is the value from the api link
        findTrack = userInput.value;
        findArt = userInput.value;

        //Permissions stuff for the API!
        let api = `${proxy}https://api.musixmatch.com/ws/1.1/track.search?q_track=${findTrack}&artist.album.get=${findArt}&s_track_rating=desc&apikey=${APIKEY}`;

        // Begin fetching the info from the API!
        fetch(api)
        .then(response => {
            return response.json();
        }).then(data => {
            console.log(data);

            //This section tells what info to open up for the API!
            //Remember, the names & numbers refer to their corresponding values across the document. 
            let tracklist = data.message.body.track_list;
            let firsttrack = tracklist[0].track;
            let secondtrack = tracklist[1].track;
            let thirdtrack = tracklist[2].track;
            let fourthtrack = tracklist[3].track;
            let fifthtrack = tracklist[4].track;

            let firsttrackrating = firsttrack.track_rating;
            let secondtrackrating = secondtrack.track_rating;
            let thirdtrackrating = thirdtrack.track_rating;
            let fourthtrackrating = fourthtrack.track_rating;
            let fifthtrackrating = fifthtrack.track_rating;

            let firsttrackalbum = firsttrack.album_coverart_100x100;
            // let firsttrackalbum = 'http://api.musixmatch.com//images//albums//5//9//6//5//7//4//11475695.jpg';
            let secondtrackalbum = secondtrack.album_coverart_100x100;
            let thirdtrackalbum = thirdtrack.album_coverart_100x100;
            let fourthtrackalbum = fourthtrack.album_coverart_100x100;
            let fifthtrackalbum = fifthtrack.album_coverart_100x100;



            //This section prints the information into the website! 
            //Remember, it must be defined with the variables from the top!
            //Also, the firsttrack /is a random name/. track_name /name of folder provided in the console log(data) thing/
            // First Search Query
            dataWrapper1.innerHTML= " " + "1. " + firsttrack.track_name;
            dataWrapper2.innerHTML= " " + " " + firsttrack.album_name;
            dataWrapper3.innerHTML= " " + " " + firsttrack.artist_name;
            if (firsttrackalbum) {
                dataWrapperA1.innerHTML= `<img src="${firsttrackalbum}">`;
            }
            
            // Second Search Query
            dataWrapper4.innerHTML= " " + "2. " + secondtrack.track_name;
            dataWrapper5.innerHTML= " " + " " + secondtrack.album_name;
            dataWrapper6.innerHTML= " " + " " + secondtrack.artist_name;
            //dataWrapperA2.innerHTML= " " + " " + firsttrack.album_coverart_100x100;
            
            // Third Search Query
            dataWrapper7.innerHTML= " " + "3. " + thirdtrack.track_name;
            dataWrapper8.innerHTML= " " + " " + thirdtrack.album_name;
            dataWrapper9.innerHTML= " " + " " + thirdtrack.artist_name;
            //dataWrapperA3.innerHTML= " " + " " + firsttrack.album_coverart_100x100;
            
            // Fourth Search Query
            dataWrapper10.innerHTML= " " + "4. " + fourthtrack.track_name;
            dataWrapper11.innerHTML= " " + " " + fourthtrack.album_name;
            dataWrapper12.innerHTML= " " + " " + fourthtrack.artist_name;
            //dataWrapperA4.innerHTML= " " + " " + firsttrack.album_coverart_100x100;
            
            // Fifth
            dataWrapper13.innerHTML= " " + "5. " + fifthtrack.track_name;
            dataWrapper14.innerHTML= " " + " " + fifthtrack.album_name;
            dataWrapper15.innerHTML= " " + " " + fifthtrack.artist_name;
            //dataWrapperA5.innerHTML= " " + " " + firsttrack.album_coverart_100x100;
        
        });
    
    }
});

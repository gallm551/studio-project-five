window.addEventListener('load', ()=> {

    const APIKEY='920fc74187502041b4efd187254f4fbc';
    proxy = 'https://cors-anywhere.herokuapp.com/',
    userInput = document.querySelector('#search'),
    dataWrapper = document.querySelector('.musix-info'),
    musixForm = document.querySelector('#musixform');

    let findTrack;
    
    musixForm.addEventListener('submit', getMusixInfo);


    function getMusixInfo(event) {

        event.preventDefault();

        findTrack = userInput.value;

        let api = `${proxy}https://api.musixmatch.com/ws/1.1/track.search?q_track=${findTrack}&s_track_rating=desc&apikey=${APIKEY}`;
    
        fetch(api)
        .then(response => {
            return response.json();
        }).then(data => {
            console.log(data);

            let tracklist = data.message.body.track_list;
            let firsttrack = tracklist[0].track;
            let secondtrack = tracklist[1].track;
            let thirdtrack = tracklist[2].track;

            let firsttrackrating = firsttrack.track_rating;
            let secondtrackrating = secondtrack.track_rating;
            let thirdtrackrating = thirdtrack.track_rating;

            dataWrapper.innerHTML = ???;
        });
    
    }
});
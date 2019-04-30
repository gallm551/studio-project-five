//JERRY
window.addEventListener('load',()=> {
    // variables and consts go here
    let long;
    let lat;

    let description = document.querySelector('.temp__description');
    let degrees = document.querySelector('.temp__value');
    let timezone = document.querySelector('.location__timezone');
    let body = document.querySelector('body');

    if(navigator.geolocation) {
    
        navigator.geolocation.getCurrentPosition(position => {

            long = position.coords.longitude;
            lat = position.coords.latitude;

            const proxy = 'https://cors-anywhere.herokuapp.com/';
            const api = `${proxy}https://api.darksky.net/forecast/659bd30b2f33c80488dee8977b13c364/${lat},${long}`;

            fetch(api) 
                .then(response => {
                    return response.json();
                })
                .then(data => {
                    console.log(data);

                    const {temperature, summary, icon } = data.currently;

                    // set DOM element values
                    description.textContent = summary;
                    degrees.textContent = temperature;
                    timezone.textContent = data.timezone;

                    body.classList.add(icon);
                    
                    setIcons(icon, document.querySelector('.icon'));

                });
        });


// new function goes here for the icons
        function setIcons(icon, iconID) {


            const skycons = new Skycons({color: "white"});
            const currentIcon = icon.replace(/-/g, "_".toUpperCase());
            skycons.play();

            return skycons.set(iconID, Skycons[currentIcon]);

        }
    }
});
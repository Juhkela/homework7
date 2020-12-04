function gettingJSON(){
    //Display the forecast
    // Your code here.
    document.querySelector('#forecast').style.display = "block";

    //Set default location if one isn't provided
    let location;
    if (document.querySelector('#location').value == '') {
        location = "Ann Arbor"
    }

    else {

        location = document.querySelector('#location').value
    }

    // Your code here.
    console.log("Location is : " + location);

    //set default temperature format if one isn't provided
    let format;
    // if (document.querySelector('#celcius').value && document.querySelector('#fahrenheit').value == '') {

    //     format = "imperial"
    // }


    if (document.querySelector('#celcius').checked) {

        format = "metric"

    }

    else {

        format = "imperial"
    } //works great!!!! YAY

    console.log(document.querySelector('#celcius').value)

    // Your code here.
    console.log("Format is " + format);

    //set the query  
    //got my API Key from signing up on the website. Testing is working!
    let query = 'https://api.openweathermap.org/data/2.5/weather?q=' + location + '&APPID=05f60a4a89d013c2e03e939a3ef43a3a&units='+ format;
    // Your code here.  
    
    console.log("Query is :" + query);

    //Create and set variables for each of the elements you
    //need to update, location, temp, the image, etc.

    let loc=document.getElementById("loc");
    let temp=document.getElementById("temp");
    let tempImg=document.getElementById('tempImg');
    // Your code here.


    $.getJSON(query,function(json){

        console.log(json); //Suggested in notes to leave a console log of the json data - :)

        //let imgStr = json.weather[0].icon;
        //tempImg = "http://openweathermap.org/img/wn/" + imgStr + ".png"; - Didn't use this. Decided to just use .setAttribute call

        document.getElementById("forecast").style.display = "block"; // Not sure if I need this, but doesn't seem to cause problems atm. Will leave for now
        document.getElementById("loc").innerHTML = json["name"];
        document.getElementById("temp").innerHTML = json["main"]["temp"] + " with " + json["weather"][0]["description"];
        document.getElementById("tempImg").setAttribute("src", "https://openweathermap.org/img/w/" + json["weather"][0]["icon"] + ".png");
        document.getElementById("tempImg").alt = json.weather[0].description + " picture";

        //Note: You can use .setAttribute or .alt! Cool stuff :)


        //Use returned json to update the values of the three 
        //elements in HTML.  
        //I would print the JSON to the console
        // Your code here.

    });
}

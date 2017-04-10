$(document).ready(function() {
    // going out page on ready functions //
    // $(".bubbleContainer").hide();H
    $(".search").hide();
    $(".search2").hide();
    $("#panel1-results").hide();
    $("#panel2-results").hide();
    // added seatGeeksAPI and googleMapsAPI to this list
    $('.seatGeeksAPI').hide();
    $(".googleMapsAPI").hide();
    $('.bubble-wrapper').hide();



    // typeGM is used for google Maps API
    //typeGM was added to click events for coffee, restaurants, museums
    //museums and bars. 
    var typeGM;
    var typeSG;


})

// click event listners for going out page
$("#concerts-click").click(function() {
    $("#first-info-panel2").hide();
    $(".search2").fadeIn(2000);
    typeSG = 'concert';
    console.log(typeSG);
});
$("#sports-click").click(function() {
    $("#first-info-panel2").hide();
    $(".search2").fadeIn(2000);
    typeSG = 'sports';
    console.log(typeSG);
});
$(".left-side-click").click(function() {
    $("#first-info-panel1").hide();
    $(".search").fadeIn(2000);
});
$("#coffee-click").click(function() {
    $("#first-info-panel1").hide();
    $("#panel1-results").fadeIn(2000);
    typeGM = 'cafe';
});
$("#restaurants-click").click(function() {
    $("#first-info-panel1").hide();
    $("#panel1-results").fadeIn(2000);
    typeGM = 'restaurant';
});
$("#libations-click").click(function() {
    $("#first-info-panel1").hide();
    $("#panel1-results").fadeIn(2000);
    typeGM = 'bar';
});
$("#theater-click").click(function() {
    $("#first-info-panel2").hide();
    $("#panel2-results").fadeIn(2000);
});
$("#museum-click").click(function() {
    $("#first-info-panel2").hide();
    $("#panel2-results").fadeIn(2000);
    typeGM = 'museum';
});
$("#back-btn-panel1").click(function() {
    $("#panel1-results").hide();
    $("#first-info-panel1").fadeIn(2000);
})
$("#back-btn-panel2").click(function() {
    $(".search2").hide();
    $("#first-info-panel2").fadeIn(2000);
})


// click event listners for staying in page
$('#cooking-click').on('click', function() {
    console.log("Time to get cooking!");
    // function is located in js/instrutableData/bubbleChart.js
    // initiates instructable api
    makeChart({ categories: instructablesDataFood }, "categories", instructablesDataFood);
    $(".instructable-info-panel1").hide();
    $(".bubble-wrapper1").fadeIn(2000);
});

// This function will work but I have to find a way to select this bubble-wrapper and 
// not the first wrap 
// (Left and right pannel have bubble-wrapper div)
$('#diy-click').on('click', function() {
    console.log("Time to do it yourself!");

    //   // makeChart({categories: instructablesDataDYS}, "categories", instructablesDataDYS);
    //   //       $(".instructable-info-panel2").hide(); 
    //   //       $(".instructable-info-panel2 .bubble-wrapper").fadeIn(2000);
});

// var used for googleMapsAPI
var map;
var infowindow;
var zipcode = {
    lat: 35.9132,
    lng: -79.0558
};

$("#add-infoGM").on("click", function(event) {
    $("#panel1-results").hide();
    $(".googleMapsAPI").fadeIn(2000);
    var location = $("#zip-code-inputGM").val();
    console.log(location);
    event.preventDefault();
    // address search box
    var queryURL = "https://maps.googleapis.com/maps/api/geocode/json?address=" + location + "&key=AIzaSyCa5mL-wJVftS2kSRy6jVV-WCdQWNUEEG4";

    // run ajax code to use Google API to get longitude and latitude
    $.ajax({
        url: queryURL,
        method: "GET",
        dataType: "json",
        cache: false,
        success: function(response) {
            zipcode = {
                // define zipcode based on address user put in
                lat: response.results[0].geometry.location.lat,
                lng: response.results[0].geometry.location.lng
            };
            // generates map using google API
            initMap();
        }
    });
});

// Google maps api
function initMap() {
    zipcode;
    console.log(zipcode);


    map = new google.maps.Map(document.getElementById('map'), {
        center: zipcode,
        zoom: 15
    });

    infowindow = new google.maps.InfoWindow();
    var service = new google.maps.places.PlacesService(map);
    service.nearbySearch({
        location: zipcode,
        radius: 5000,
        type: [typeGM]
    }, callback);
}
// Google maps api
function callback(results, status) {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
        for (var i = 0; i < results.length; i++) {
            createMarker(results[i]);
        }
    }
}
// Google maps api
function createMarker(place) {
    var placeLoc = place.geometry.location;
    var marker = new google.maps.Marker({
        map: map,
        position: place.geometry.location
    });

    google.maps.event.addListener(marker, 'click', function() {
        infowindow.setContent(place.name);
        infowindow.open(map, this);
    });
}

// seatGeeksAPI
$('button').on('click', function() {
    var date = $('#date-input').val().trim();
    var zipcode = $('#zip-code-inputSG').val().trim();

    var queryURL = 'https://api.seatgeek.com/2/events?&geoip=' + zipcode + '&sort=score.desc&type=' + typeSG + '&datetime_utc=' + date + '&client_id=NzIwMTk3MnwxNDkxMDAyMDQ0LjE2'
    console.log(queryURL);
    $.ajax({
        method: "GET",
        url: queryURL
    }).done(function(respone) {
        console.log(respone);
    });
});











// jsbubbleColorize = function() {
//   qmeta = document.getElementsByTagName("circle")
//   for (var i = 0; i < qmeta.length; i++) {
//     var colors = ["#314e55", "#f58cac", "#73c9c9"]
//     colorA = colors[Math.floor(Math.random() * colors.length)];
//     document.getElementsByTagName("circle")[i].setAttribute("style", 'color:' + colorA)
//   }

// };

// jsbubbleColorize();

// jqbubbleColorize = function() {
//   qbog = $("circle")
//   for (var i = 0; i < qbog.length; i++) {
//     fog = qbog[i]
//     var colors = ["#314e55", "#f58cac", "#73c9c9"]
//     colorA = colors[Math.floor(Math.random() * colors.length)];
//     $(fog).attr("style", 'color:' + colorA)
//   }
// }

// jqbubbleColorize()

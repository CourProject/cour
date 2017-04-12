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
    $('.googleMapsAPIList').hide();
    // added hide function for button containers //
    $("#google-button-container").hide();
    $("#seatGeek-back-btn-container").hide();



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
    $(".search2").fadeIn(2000);
});
$("#museum-click").click(function() {
    $("#first-info-panel1").hide();
    $("#panel1-results").fadeIn(2000);
    typeGM = 'museum';
});
$("#back-btn-panel1").click(function() {
    $("#panel1-results").hide();
    $("#first-info-panel1").fadeIn(2000);
})
$("#back-btn-panel2").click(function() {
    $(".search2").hide();
    $("#first-info-panel2").fadeIn(2000);
});
// added click function for google result back button//
$("#back-btn-google").click(function() {
  $(".googleMapsAPI").hide();
  $(".googleMapsAPIList").hide().empty();
  $("#google-button-container").hide();
  $("#first-info-panel1").fadeIn(2000);
  $("#first-info-panel2").fadeIn(2000);
});

// added click function for seatGeek result back button

$("#back-btn-seatGeek").click(function() {
  $(".googleMapsAPI").hide();
  $("#seatGeek-back-btn-container").hide();
  $(".search2").hide();
  $("#first-info-panel1").fadeIn(2000);
  $("#first-info-panel2").fadeIn(2000);
  $("#back-btn-panel2").show();


})




// var used for googleMapsAPI
var map;
var location
var infowindow;
var zipcode = {
    lat: 35.9132,
    lng: -79.0558
};

var labels = "12345";
var labelIndex = 0

// function applyViewMode() {
//     this.location = ko.observable(location2);
//     console.log(this.location);
// }
// // Activates knockout.js
// ko.applyBindings(new applyViewMode());


$("#add-infoGM").on("click", function(event) {
    $("#panel1-results").hide();
    $(".googleMapsAPI").fadeIn(2000);
    var location = $('#zip-code-inputGM').val();
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
    $('#map').empty();
    zipcode;
    console.log(zipcode);


    map = new google.maps.Map(document.getElementById('map'), {
        center: zipcode,
        zoom: 13
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
            var numberOrder = i + 1;
            $('.googleMapsAPIList').append('<p>' + numberOrder + '.  Name: ' + results[i].name + '</p>');
            $('.googleMapsAPIList').append('<p> Address: ' + results[i].vicinity + '</p>');
            $('.googleMapsAPIList').append('<p> Rating: ' + results[i].rating + '</p>');
            if (i === 4) {
              break;
            }
        }
        $("#first-info-panel2").hide();
        $('.googleMapsAPIList').fadeIn(5000);

        // added button fade in//
        $("#google-button-container").fadeIn(5000);

    }
}
// Google maps api
function createMarker(place) {
    var placeLoc = place.geometry.location;
    var marker = new google.maps.Marker({
        map: map,
        label: labels[labelIndex++ % labels.length],
        position: place.geometry.location
    });

    google.maps.event.addListener(marker, 'click', function() {
        infowindow.setContent(place.name);
        infowindow.open(map, this);
    });
}


// Initialize Firebase
var config = {
    apiKey: "AIzaSyDUuTEo0pNuJ489UnVdRUqFEL3FQqMdK9I",
    authDomain: "my-awesome-project-487ee.firebaseapp.com",
    databaseURL: "https://my-awesome-project-487ee.firebaseio.com",
    projectId: "my-awesome-project-487ee",
    storageBucket: "my-awesome-project-487ee.appspot.com",
    messagingSenderId: "693219172838"
};
firebase.initializeApp(config);

$('#submitForm').on('click', function() {
    event.preventDefault();

    var gender = $('#gender').val().trim();
    var age = $('#age').val().trim();

    database.ref().push({
        gender: gender,
        age: age
    })
});

// seatGeeksAPI
$('#add-infoSG').on('click', function() {
    var date = $('#date-input').val().trim();
    var zipcode = $('#zip-code-inputSG').val().trim();
    var queryURL = 'https://api.seatgeek.com/2/events?&geoip=' + zipcode + '&sort=score.desc&type=' + typeSG + '&datetime_utc.gt=' + date + '&client_id=NzIwMTk3MnwxNDkxMDAyMDQ0LjE2'
    console.log(queryURL);
    $.ajax({
        method: "GET",
        url: queryURL
    }).done(function(response) {
        $('#map').empty();
        console.log(response);
        for (var i = 0; i < 5; i++) {
            $('#map').append("<p> Artist: " + response.events[i].title + '</p>');
            $('#map').append("<p> Venue: " + response.events[i].venue.name + '</p>');
            $('#map').append("<a href ='" + response.events[i].url + "' target= _blank>Buy Tickets</a>");
        }
    });
    $("#first-info-panel1").hide();
    $(".googleMapsAPI").show();
    $("#seatGeek-back-btn-container").show();
    $("#back-btn-panel2").hide();

});

// Instructable API
function clickFunctionsForStayingInPage2() {
    var bubbleContainer = $("<div class='col-lg-6 bubbleContainer'>")
    var link = $("<link rel='stylesheet' type='text/css' href='assets/js/instructable_Static/style.css'>")
    var container = $("<div class='container'>")
    var bubbleAPI = $("<div class='bubbleAPI col-lg-6'>")
    var bubbleWrapper = $("<div class='bubble-wrapper'>")
    $('.Cooking-click').on('click', function() {
        $('.panelfirst').hide();
        $('.panelsecond').fadeIn(3000);
        bubbleContainer.append(link)
        bubbleContainer.append(container)
        container.append(bubbleAPI)
        bubbleAPI.append(bubbleWrapper)
        bubbleContainer.hide()
        bubbleContainer.fadeIn(2000);
        $(".first-info-panel").append(bubbleContainer)

        makeChart({ categories: instructablesDataFood }, "categories", instructablesDataFood);
    });

    $('.Desert-click').on('click', function() {
        $('.panelfirst').hide();
        $('.panelsecond').fadeIn(3000);
        bubbleContainer.append(link)
        bubbleContainer.append(container)
        container.append(bubbleAPI)
        bubbleAPI.append(bubbleWrapper)
        bubbleContainer.hide()
        bubbleContainer.fadeIn(2000)
        $(".first-info-panel").append(bubbleContainer)
        makeChart({ categories: instructablesDataDessert }, "categories", instructablesDataDessert);

    })


    $('.DIY-click').on('click', function() {
        $('.panelsecond').hide();
        $('.panelfirst').fadeIn(3000);
        bubbleContainer.append(link)
        bubbleContainer.append(container)
        container.append(bubbleAPI)
        bubbleAPI.append(bubbleWrapper)
        bubbleContainer.hide()
        bubbleContainer.fadeIn(2000)
        $(".panel2").append(bubbleContainer)
        makeChart({ categories: instructablesDataDYS }, "categories", instructablesDataDYS);

    });

    $('.Play-click').on('click', function() {
        $('.panelsecond').hide();
        $('.panelfirst').fadeIn(3000);
        bubbleContainer.append(link)
        bubbleContainer.append(container)
        container.append(bubbleAPI)
        bubbleAPI.append(bubbleWrapper)
        bubbleContainer.hide()
        bubbleContainer.fadeIn(2000)
        $(".panel2").append(bubbleContainer)
        makeChart({ categories: instructablesDataPlay }, "categories", instructablesDataPlay);
    });

}
clickFunctionsForStayingInPage2();

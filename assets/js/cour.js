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
})


// var used for googleMapsAPI
var map;
var infowindow;
var zipcode = {
    lat: 35.9132,
    lng: -79.0558
};
var labels = "12345";
var labelIndex = 0

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

        for (var i = 0; i < 5; i++) {
            createMarker(results[i]);
            var numberOrder = i + 1;
            $('.googleMapsAPIList').append('<p>' + numberOrder + '.  Name: ' + results[i].name + '</p>');
            $('.googleMapsAPIList').append('<p> Address: ' + results[i].vicinity + '</p>');
            $('.googleMapsAPIList').append('<p> Rating: ' + results[i].rating + '</p>');
        }
        $("#first-info-panel2").hide();
        $('.googleMapsAPIList').fadeIn(5000);
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



var javascript = $("<script>")
var javascript2 = $("<script>")
javascript.attr("type", "text/javascript")
javascript2.attr("type", "text/javascript")
javascript.attr("src", "https://natepond.github.io/cour/assets/js/instructable_Static/js/bubbleChart.js")
javascript2.attr("src", "https://natepond.github.io/cour/assets/js/instructable_Static/js/instructableData/baseData.js")
$("#test").append(javascript)



$(document).ready(function() {

    $(".search").hide();
    $(".search2").hide();
    $("#panel1-results").hide();
    $("#panel2-results").hide();




})

function clickFunctionsForGoingOutPage() {
    $(".concerts-sports-click").click(function() {
        $("#first-info-panel2").hide();
        $(".search2").fadeIn(2000);
    });
    $(".left-side-click").click(function() {
        $("#first-info-panel1").hide();
        $(".search").fadeIn(2000);
    });
    $("#coffee-click").click(function() {
        $("#first-info-panel1").hide();
        $("#panel1-results").fadeIn(2000);
    });
    $("#restaurants-click").click(function() {
        $("#first-info-panel1").hide();
        $("#panel1-results").fadeIn(2000);
    });
    $("#libations-click").click(function() {
        $("#first-info-panel1").hide();
        $("#panel1-results").fadeIn(2000);
    });
    $("#theater-click").click(function() {
        $("#first-info-panel2").hide();
        $("#panel2-results").fadeIn(2000);
    });
    $("#museum-click").click(function() {
        $("#first-info-panel2").hide();
        $("#panel2-results").fadeIn(2000);
    });
    $("#back-btn-panel1").click(function() {
        $("#panel1-results").hide();
        $("#first-info-panel1").fadeIn(2000);
    })
    $("#back-btn-panel2").click(function() {
        $(".search2").hide();
        $("#first-info-panel2").fadeIn(2000);
    })


};
clickFunctionsForGoingOutPage();




var bubbleContainer = $("<div class='col-lg-6 bubbleContainer'>")
var link = $("<link rel='stylesheet' type='text/css' href='assets/js/instructable_Static/style.css'>")
var container = $("<div class='container'>")
var bubbleAPI = $("<div class='bubbleAPI col-lg-6'>")
var bubbleWrapper = $("<div class='bubble-wrapper'>")
var test = $("<div id='test'>")
var javascript = $("<script>")
var javascript2 = $("<script>")
javascript.attr("type", "text/javascript")
javascript2.attr("type", "text/javascript")
javascript.attr("src", "https://natepond.github.io/cour/assets/js/instructable_Static/js/bubbleChart.js")
javascript2.attr("src", "https://natepond.github.io/cour/assets/js/instructable_Static/js/instructableData/foodData.js")

var javascript3 = $("<script>")
var javascript4 = $("<script>")
javascript3.attr("type", "text/javascript")
javascript4.attr("type", "text/javascript")
javascript3.attr("src", "https://natepond.github.io/cour/assets/js/instructable_Static/js/bubbleChart.js")
javascript4.attr("src", "https://natepond.github.io/cour/assets/js/instructable_Static/js/instructableData/baseData.js")



$(".DIY-click").click(function() {
    var javascript = $("<script>")
    var javascript2 = $("<script>")
    javascript.attr("type", "text/javascript")
    javascript2.attr("type", "text/javascript")
    javascript.attr("src", "https://natepond.github.io/cour/assets/js/instructable_Static/js/bubbleChart.js")
    javascript2.attr("src", "https://natepond.github.io/cour/assets/js/instructable_Static/js/instructableData/baseData.js")


    $("#test").append(javascript)


});

$(".DIY-click").dblclick(function() {
    $(".panelfirst").append(bubbleContainer)
    bubbleContainer.append(link)
    bubbleContainer.append(container)
    container.append(bubbleAPI)
    bubbleAPI.append(bubbleWrapper)
    bubbleContainer.append(test)
    var javascript = $("<script>")
    var javascript2 = $("<script>")
    javascript.attr("type", "text/javascript")
    javascript2.attr("type", "text/javascript")
    javascript.attr("src", "https://natepond.github.io/cour/assets/js/instructable_Static/js/bubbleChart.js")
    javascript2.attr("src", "https://natepond.github.io/cour/assets/js/instructable_Static/js/instructableData/baseData.js")


    $("#test").append(javascript2)

});


$(".Play-click").click(function() {


    var javascript3 = $("<script>")
    var javascript4 = $("<script>")
    javascript3.attr("type", "text/javascript")
    javascript4.attr("type", "text/javascript")
    javascript3.attr("src", "https://natepond.github.io/cour/assets/js/instructable_Static/js/bubbleChart.js")
    javascript4.attr("src", "https://natepond.github.io/cour/assets/js/instructable_Static/js/instructableData/foodData.js")

    $("#test").append(javascript4)
    $("#test").append(javascript3)

    $(".panelsecond").append(bubbleContainer)
});

$(".Play-click").dblclick(function() {
    $(".panelsecond").append(bubbleContainer)
    bubbleContainer.append(link)
    bubbleContainer.append(container)
    container.append(bubbleAPI)
    bubbleAPI.append(bubbleWrapper)
    bubbleContainer.append(test)
    var javascript3 = $("<script>")
    var javascript4 = $("<script>")
    javascript3.attr("type", "text/javascript")
    javascript4.attr("type", "text/javascript")
    javascript3.attr("src", "https://natepond.github.io/cour/assets/js/instructable_Static/js/bubbleChart.js")
    javascript4.attr("src", "https://natepond.github.io/cour/assets/js/instructable_Static/js/instructableData/foodData.js")

    $("#test").append(javascript4)
    $("#test").append(javascript3)

});




// }




function clickFunctionsForStayingInPage2() {
    var bubbleContainer = $("<div class='col-lg-6 bubbleContainer'>")
    var link = $("<link rel='stylesheet' type='text/css' href='assets/js/instructable_Static/style.css'>")
    var container = $("<div class='container'>")
    var bubbleAPI = $("<div class='bubbleAPI col-lg-6'>")
    var bubbleWrapper = $("<div class='bubble-wrapper'>")
    $('.Cooking-click').on('click', function() {
        $(".Cooking-click").attr("class", "row-null")
        $(".Desert-click").attr("class", "row-null")
        $(".Cocktails-click").attr("class", "row-null")
        $(".DIY-click").attr("class", "row-show")
        $(".Movie-click").attr("class", "row-show")
        $(".Play-click").attr("class", "row-show")
        $(".DIY-click").removeClass("row-null").addClass("row-show")
        console.log("Time to get cooking!");
        bubbleContainer.append(link)
        bubbleContainer.append(container)
        container.append(bubbleAPI)
        bubbleAPI.append(bubbleWrapper)
        bubbleContainer.hide()
        bubbleContainer.fadeIn(2000)
        $(".panelfirst").append(bubbleContainer)

        makeChart({ categories: instructablesDataFood }, "categories", instructablesDataFood);
        $(".instructable-info-panel1").hide();
        $(".bubble-wrapper1").fadeIn(2000);
    });

    $('.Desert-click').on('click', function() {
        $(".Cooking-click").attr("class", "row-null")
        $(".Desert-click").attr("class", "row-null")
        $(".Cocktails-click").attr("class", "row-null")
        $(".DIY-click").attr("class", "row-show")
        $(".Movie-click").attr("class", "row-show")
        $(".Play-click").attr("class", "row-show")
        console.log('Dessert, SOOO GOOD!!!!');
        bubbleContainer.append(link)
        bubbleContainer.append(container)
        container.append(bubbleAPI)
        bubbleAPI.append(bubbleWrapper)
        bubbleContainer.hide()
        bubbleContainer.fadeIn(2000)
        $(".panelfirst").append(bubbleContainer)
        makeChart({ categories: instructablesDataDessert }, "categories", instructablesDataDessert);
        $(".instructable-info-panel1").hide();
        $("going-out-content .bubble-wrapper:nth-child(1)").fadeIn(2000);

    })


    $('.DIY-click').on('click', function() {
        $(".DIY-click").attr("class", "row-null")
        $(".Movie-click").attr("class", "row-null")
        $(".Play-click").attr("class", "row-null")
        $(".Cooking-click").attr("class", "row-show")
        $(".Desert-click").attr("class", "row-show")
        $(".Cocktails-click").attr("class", "row-show")
        console.log("Time to do it yourself!");
        bubbleContainer.append(link)
        bubbleContainer.append(container)
        container.append(bubbleAPI)
        bubbleAPI.append(bubbleWrapper)
        bubbleContainer.hide()
        bubbleContainer.fadeIn(2000)
        $(".panelsecond").append(bubbleContainer)
        makeChart({ categories: instructablesDataDYS }, "categories", instructablesDataDYS);
        $(".instructable-info-panel2").hide();
        $("going-out-content .bubble-wrapper:nth-child(2)").fadeIn(2000);
    });

    $('.Play-click').on('click', function() {
        console.log("Recess!!!");
        bubbleContainer.append(link)
        bubbleContainer.append(container)
        container.append(bubbleAPI)
        bubbleAPI.append(bubbleWrapper)
        bubbleContainer.hide()
        bubbleContainer.fadeIn(2000)
        $(".panelsecond").append(bubbleContainer)
        makeChart({ categories: instructablesDataPlay }, "categories", instructablesDataPlay);
        $(".instructable-info-panel2").hide();
        $("going-out-content .bubble-wrapper:nth-child(2)").fadeIn(2000);
    });

}





clickFunctionsForStayingInPage2();

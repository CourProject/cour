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


$(document).ready(function() {
  // going out page on ready functions //
  $(".search").hide();
  $(".search2").hide();
  $("#panel1-results").hide();
  $("#panel2-results").hide();
  // $(".bubbleContainer").hide();



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
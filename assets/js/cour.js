$(document).ready(function() {
	// going out page on ready functions //
	$(".search").hide();
	$("#panel1-results").hide();
	$("#panel2-results").hide();



})

function clickFunctionsForGoingOutPage() {
	$(".concerts-sports-click").click(function() {
		$("#first-info-panel2").hide();
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
		$("#panel2-results").hide();
		$("#first-info-panel2").fadeIn(2000);
	})
};
clickFunctionsForGoingOutPage();


$(document).ready(function(){
	$('#searchprojects').focus(function(){
		$('.navbar-nav li').hide();
		$('.in-c').removeClass("glyphicon glyphicon-search");
		$('.in-c').addClass("glyphicon glyphicon-remove");
		$(this).animate({width: "600px"}, 250);
	});
	$('#searchprojects').blur(function(){
		$(this).animate({width: "200px"}, 250, function() {
			$('.navbar-nav li').show();
			$('.in-c').removeClass("glyphicon glyphicon-remove");
			$('.in-c').addClass("glyphicon glyphicon-search");
		});
	});
});


function convert(_O_) {
	if (_O_ = "filepath") {
		alert($("txt-uid").val());
		var uid = document.getElementById("txt-uid").value;
		var dev = document.getElementById("opt-dev").value;
		var drv = document.getElementById("opt-drv").value;
		console.log(uid);
		alert(uid);
		alert(dev);
		alert(drv);
		//var pwd = alert();
	}
	else {
		console.log("nope");
	}
};


function inception(){alert("Inception!");alert("Inception!");alert("Inception!");alert("Inception!");alert("Inception!");alert("Inception!");alert("Inception!");alert("Inception!");alert("Inception!");alert("Inception!");alert("Inception!");alert("Inception!");alert("Inception!");alert("Inception!");alert("Inception!");alert("Inception!");alert("Inception!");alert("Inception!");alert("Inception!");alert("Inception!");alert("Inception!");var cont__i=confirm("Inception?");if(cont__i=true){inception();}else if(cont__i=false){return null;}else{console.log('>_');return null;}};
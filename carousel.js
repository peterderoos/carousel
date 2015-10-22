if (Meteor.isClient) {
window.onload = function() {
var carousel = $(".carousel");
    currdeg  = 0;
//Aanmaken variabele voor rotatie
var rotateInterval = setInterval(myTimer, 100);
var b = true;

var toggled = false;
//Aanmaken functie voor rotatie
function myTimer() {
	if(b) 
	currdeg -= 5;
	  carousel.css({
    "-webkit-transform": "rotateY("+currdeg+"deg)",
    "-moz-transform": "rotateY("+currdeg+"deg)",
    "-o-transform": "rotateY("+currdeg+"deg)",
    "transform": "rotateY("+currdeg+"deg)"
  });
}
//Aanmaken functie voor wisselen carousel/roster
$('.button').click(function() {
	toggled = !toggled;
	$('.item').toggleClass('toggle');
	if (!rotateInterval) {
		$('.item').attr('style','');
		rotateInterval = setInterval(myTimer, 100);
		$('.container').css('width', '280px');
				//$(this).css("opacity", "0.75");
	}
	else {
		$('.item').css('transform', 'none');
		currdeg -= currdeg%360;
		clearInterval(rotateInterval);
		rotateInterval = null;
		carousel.css({
			"-webkit-transform": "rotateY("+currdeg+"deg)",
			"-moz-transform": "rotateY("+currdeg+"deg)",
			"-o-transform": "rotateY("+currdeg+"deg)",
			"transform": "rotateY("+currdeg+"deg)"
		});
  		$('.container').css('width', 'auto');
	}
})

var a = 0;
//Aanmaken functie voor in/uitzoomen div's
$('.item').click(function(){
	if (toggled) {
		$(this).toggleClass('zoomin');
		$(this).css("opacity", "1 !important");
	}
	else {
			console.dir($(this));
    if( a%2==0){b=false; 
	currdeg=currdeg-(currdeg %360)-(60*$(this).context.dataset.id);	
		$(this).context.style.transform = "rotateY("+$(this).context.dataset.id*60+"deg) translate3d("+0+"px,"+15+"px,"+550+"px)";
		$(this).css("opacity", "1");
	}
	if( a%2==1){b=true;
		$(this).attr('style','');
		//$(this).context.style.transform = "rotateY("+$(this).context.dataset.id*60+"deg) translateZ("+250+"px)";
		$(this).css("opacity", "0.75");
	}
	a++;
	}

});
};
}
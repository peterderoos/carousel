if (Meteor.isClient) {
window.onload = function() {
var carousel = $(".carousel"),
    currdeg  = 0;

var rotateInterval = setInterval(myTimer, 100);
var b = true;

var toggled = false;

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

$('.button').click(function() {
	toggled = !toggled;
	$('.item').toggleClass('toggle');
	if (!rotateInterval) {
		rotateInterval = setInterval(myTimer, 100);
		$('.container').css('width', '280px');
	}
	else {
		currdeg = 0;
		clearInterval(rotateInterval);
		rotateInterval = null;
		carousel.css({
			"-webkit-transform": "rotateY("+0+"deg)",
			"-moz-transform": "rotateY("+0+"deg)",
			"-o-transform": "rotateY("+0+"deg)",
			"transform": "rotateY("+0+"deg)"
		});
  		$('.container').css('width', 'auto');
	}
})

var a = 0;

$('.item').click(function(){
	if (toggled) {
		$(this).toggleClass('zoomin');
	}
	else {
		
	}
	console.dir($(this));
    if( a%2==0){b=false; 
	currdeg=currdeg-(currdeg %360)-(60*$(this).context.dataset.id);	
		$(this).context.style.transform = "rotateY("+$(this).context.dataset.id*60+"deg) translate3d("+0+"px,"+15+"px,"+500+"px)";
		$(this).css("opacity", "1");
	}
	if( a%2==1){b=true;
		$(this).context.style.transform = "rotateY("+$(this).context.dataset.id*60+"deg) translateZ("+250+"px)";
		$(this).css("opacity", "0.75");
	}
	a++;
});
};
}
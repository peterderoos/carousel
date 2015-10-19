if (Meteor.isClient) {
window.onload = function() {
var carousel = $(".carousel"),
    currdeg  = 0;

function rotate(e){
  if(e.data.d=="n"){
    currdeg = currdeg - 60;
  }
  if(e.data.d=="p"){
    currdeg = currdeg + 60;
  }
  carousel.css({
    "-webkit-transform": "rotateY("+currdeg+"deg)",
    "-moz-transform": "rotateY("+currdeg+"deg)",
    "-o-transform": "rotateY("+currdeg+"deg)",
    "transform": "rotateY("+currdeg+"deg)"
  });
}
setInterval(myTimer, 100);
var b = true;

function myTimer() {
	if(b) 
	currdeg = currdeg - 5;
	  carousel.css({
    "-webkit-transform": "rotateY("+currdeg+"deg)",
    "-moz-transform": "rotateY("+currdeg+"deg)",
    "-o-transform": "rotateY("+currdeg+"deg)",
    "transform": "rotateY("+currdeg+"deg)"
  });
}

var s = 0;

$('.button').click(function() {
	if(s%2==0){
		$('.item').unbind('click');
		$('.item').click(function(){
		console.dir($(this));
    if( a%2==0){
		$(this).animate({height:'600px', width:'840px', left:'0'}, 500);
		$(this).css("opacity", "1");
		$(this).css('z-index', '1');
	}
	if( a%2==1){
			for(var i=0; i<divs.length; i++){
		divs[i].css('top', (Math.floor(i/3)*(200+10))+'px');
		divs[i].css('left', (i%3)*(280+10)+'px');
			$(this).animate({height:'200px', width:'280px'}, 500);

	}
	}
	a++;
});
		$('h1').css('margin-top', '280px');
		$('.button').css('margin-top', '-80px');
		$('.button').text('Carousel');
		$('.switch').text('Roster');
		$('.switch').css('margin-left', '550px');
		$('.container').css('margin-left','200px');
	for(var i=0; i<divs.length; i++){
		divs[i].css('top', (Math.floor(i/3)*(200+10))+'px');
		divs[i].css('left', (i%3)*(280+10)+'px');
	}
		$('.container').css('perspective', 'none');
		currdeg -= currdeg%360;
		b =false;
	  $('.item').css({
    "-webkit-transform": "rotateY("+0+"deg)",
    "-moz-transform": "rotateY("+0+"deg)",
    "-o-transform": "rotateY("+0+"deg)",
    "transform": "rotateY("+0+"deg)"
  });
	};
	if(s%2==1){
		$('.item').unbind('click');
		$('.item').click(function(){
		console.dir($(this));
    if( a%2==0){b=false; 
	currdeg=currdeg-(currdeg %360)-(60*$(this).context.dataset.id);
		//$(this).animate({height:'400px', width:'560px'}, 500);	
		$(this).context.style.transform = "rotateY("+$(this).context.dataset.id*60+"deg) translate3d("+0+"px,"+15+"px,"+500+"px)";
		$(this).css("opacity", "1");
	}
	if( a%2==1){b=true;
		//$(this).animate({height:'200px', width:'280px'}, 500);
		$(this).context.style.transform = "rotateY("+$(this).context.dataset.id*60+"deg) translateZ("+250+"px)";
		$(this).css("opacity", "0.75");
	}
	a++;

});
		$('h1').css('margin-top', '200px');
		$('.button').css('margin-top', '0px');
		$('.button').text('Roster');
		$('.switch').text('Carousel');
		$('h1').css('margin-left', '500px');
		$('.container').css('margin','auto');
	for(var i=0; i<divs.length; i++){
		divs[i].css('top', '0px');
		divs[i].css('left', '0px');
		divs[i].css('transform', 'rotateY('+i*60+'deg) translateZ('+250+'px)');
	}
		$('.container').css('perspective', '800px');
		b =true;
  carousel.css({
    "-webkit-transform": "rotateY("+currdeg+"deg)",
    "-moz-transform": "rotateY("+currdeg+"deg)",
    "-o-transform": "rotateY("+currdeg+"deg)",
    "transform": "rotateY("+currdeg+"deg)"
  });
	}
	s++;
});

var divs = [];
divs[0] = $('.a');
divs[1] = $('.b');
divs[2] = $('.c');
divs[3] = $('.d');
divs[4] = $('.e');
divs[5] = $('.f');


var a = 0;

$('.item').click(function(){
	console.dir($(this));
    if( a%2==0){b=false; 
	currdeg=currdeg-(currdeg %360)-(60*$(this).context.dataset.id);
		//$(this).animate({height:'400px', width:'560px'}, 500);	
		$(this).context.style.transform = "rotateY("+$(this).context.dataset.id*60+"deg) translate3d("+0+"px,"+15+"px,"+500+"px)";
		$(this).css("opacity", "1");
	}
	if( a%2==1){b=true;
		//$(this).animate({height:'200px', width:'280px'}, 500);
		$(this).context.style.transform = "rotateY("+$(this).context.dataset.id*60+"deg) translateZ("+250+"px)";
		$(this).css("opacity", "0.75");
	}
	a++;

});
};
}
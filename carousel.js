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
	currdeg -= 4;
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
		$(this).css("opacity", "0.75");
	}
	a++;
	}

});

		var colorThief = new ColorThief();

		var jelle = document.querySelector(".jelle");
	
		var c = colorThief.getColor(jelle);	
		
		var time = performance.now();
		$('body').css({
						'-webkit-background-color': 'rgb('+c[0]+','+c[1]+','+c[2]+')',
						'-moz-background-color': 'rgb('+c[0]+','+c[1]+','+c[2]+')',
						'-o-background-color': 'rgb('+c[0]+','+c[1]+','+c[2]+')',
						'background-color': 'rgb('+c[0]+','+c[1]+','+c[2]+')'
		
		});
		
		
		console.log(c);
		
		var d = colorThief.getPalette(jelle, 6);
		
		for(var i=0; i<6;i++){
				console.log(i)
				$('.item'+[i]).css({
						'-webkit-background-color': 'rgb('+d[i][0]+','+d[i][1]+','+d[i][2]+')',
						'-moz-background-color': 'rgb('+d[i][0]+','+d[i][1]+','+d[i][2]+')',
						'-o-background-color': 'rgb('+d[i][0]+','+d[i][1]+','+d[i][2]+')',
						'background-color': 'rgb('+d[i][0]+','+d[i][1]+','+d[i][2]+')'
		
		});
		}
		
		for(var i=0; i<6;i++){
				var o = (i<5)?i+1:0;
				$('.item'+[i]).css('color', 'rgb('+d[o][0]+','+d[o][1]+','+d[o][2]+')')
		}
		console.log(performance.now()-time);
		
};
}

(function(){
		$('.click').bind('click', pulse);
		function pulse(){
		$('.click').unbind();
	 	$('div#innerwrapper').slideDown(0);
		$('.first_additional, .first, .second, .third, .fourth, .fifth, .sixth').css("width","0px");
	



		$('div#main0 span.first_additional').animate({'width': '32px'},160, 'linear', function(){
		$('div#main span.first').animate({'width': '52px'}, 60, 'linear', function(){
		
	$('div#main1 span.second').animate({'width': '148px'}, 100, 'linear', function(){
			$('div#main2 span.third').animate({'width': '190px'}, 110, 'linear', function(){
					$('div#main3 span.fourth').animate({'width': '280px'}, 200, 'linear', function(){
						$('div#main4 span.fifth').animate({'width':'210px'}, 200, 'linear', function(){
							$('div#main5 span.sixth').animate({'width':'180px'}, 200, 'linear', function(){
					$('div#innerwrapper').delay(1000).slideUp(0);
					$('.click').bind('click', pulse);					
					});
					});
				});
			});
		});
	});
});
}



})();


function redLoop(){
		function elementA(){
			$('div#circle.a').css("display","none");		
		}
		setTimeout(elementA, 500);
		
		function elementB(){
			$('div#circle.b').css("display","none");		
		}
		setTimeout(elementB, 1000);

		function elementC(){
			$('div#circle.c').css("display","none");		
		}
		setTimeout(elementC, 1500);

		function display(){
		$('div#circle').css("display","block");
		}
		setTimeout(display, 2000);
			
	}
	redLoop();
	setInterval(redLoop, 2500);


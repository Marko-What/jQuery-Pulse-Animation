(function(){

		$('.click').on('click', function(){
	 	$('div#innerwrapper').slideDown(0);
		$('.first_additional, .second, third, .fourth, .fifth, .sixth').css("width","0px");
		$('div#main0 span.first_additional').css("width","0px");		
	

		$('div#main0 span.first_additional').animate({'width': '32px'},160, 'linear', function(){
		$('div#main span.first').animate({'width': '52px'}, 60, 'linear', function(){
		
	$('div#main1 span.second').animate({'width': '148px'}, 100, 'linear', function(){
			$('div#main2 span.third').animate({'width': '190px'}, 110, 'linear', function(){
					$('div#main3 span.fourth').animate({'width': '280px'}, 200, 'linear', function(){
						$('div#main4 span.fifth').animate({'width':'210px'}, 200, 'linear', function(){
							$('div#main5 span.sixth').animate({'width':'180px'}, 200, 'linear', function(){
					$('div#innerwrapper').delay(1700).slideUp(0);					
					});
					});
				});
			});
		});
	});
});
});



})();



$('div#circle.first').on('click', function(){

$('div#circle.first').addClass("red").delay(2400).queue(function(next){
	$(this).removeClass("red");
	next();
});	

$('div#circle.second').addClass("red").delay(1600).queue(function(next){
	$(this).removeClass("red");
	next();
});

$('div#circle.third').addClass("red").delay(800).queue(function(next){
	$(this).removeClass("red");
	next();
});


});

function test(){
	$('div#circle.first').trigger("click");
}

setInterval(test, 2800);

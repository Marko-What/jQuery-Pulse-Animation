(function(){

		$('div#wrapper').on('click', function(){

		$('div#main0 span.first_additional').animate({'width': '32px'},160, 'linear', function(){
		$('div#main span.first').animate({'width': '52px'}, 60, 'linear', function(){
		
	$('div#main1 span.second').animate({'width': '148px'}, 100, 'linear', function(){
			$('div#main2 span.third').animate({'width': '190px'}, 110, 'linear', function(){
					$('div#main3 span.fourth').animate({'width': '280px'}, 200, 'linear', function(){
						$('div#main4 span.fifth').animate({'width':'210px'}, 200, 'linear', function(){
							$('div#main5 span.sixth').animate({'width':'180px'}, 200, 'linear');
					});
				});
			});
		});
	});
});
});
})();


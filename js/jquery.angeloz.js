$(function() {
				$.fn.juizScrollTo = function(speed, v_indent){
					
					if(!speed) var speed = 'slow';
					if(!v_indent) var v_indent = 0;
					
					return this.each(function(){
						$(this).click(function(){
							
							var goscroll = false;
							var the_hash = $(this).attr("href");
							var regex = new RegExp("\#(.*)","gi");

							if(the_hash.match("\#(.+)")) {

								the_hash = the_hash.replace(regex,"$1");

								if($("#"+the_hash).length>0) {
									the_element = "#" + the_hash;
									goscroll = true;
								}
								else if($("a[name=" + the_hash + "]").length>0) {
									the_element = "a[name=" + the_hash + "]";
									goscroll = true;
								}
							
								if(goscroll) {
									var container = 'html';
									if ($.browser.webkit) container = 'body';
									
									$(container).animate({
										scrollTop:$(the_element).offset().top + v_indent
									}, speed, 
										function(){$(the_element).attr('tabindex','0').focus().removeAttr('tabindex');});
									return false;
								}
							}
						});
					});
				};

		$('a:not(.button)').juizScrollTo('slow',-40);
		// menu
		$(".icon-menu").click(function() {
			$("nav#menu").toggle("appear");
		});
		

		//brands
		var brands = "data/data-brands.json";

			$.getJSON(brands,
				{},
				function(data) {
					$(data).each( function(index){
						var idBrands = this.marque.replace(/ /g,'');

						var newDiv = $('<div/>', {
							id: idBrands,
						});

						newDiv.addClass('mix two columns');

						if (this.Women == 'true') {
							newDiv.addClass('woman');
						};
						if (this.Men == 'true') {
							newDiv.addClass('man');
						};
						if (this.FribourgCentre == 'true') {
							newDiv.addClass('fribourg');
						};
						if (this.LaTour == 'true') {
							newDiv.addClass('laTour');
						};



						var newImg = $(('<img />'),{
							src:'img/brands/jackjones.svg',
							alt:this.marque
						});

						var newH3 = $('<h3 />').html(this.marque);
						newDiv.append(newImg);
						newDiv.append(newH3);
						
						if (this.FribourgCentre == 'true' || this.LaTour == 'true') {
							$("#container-brands").append(newDiv);
						
						};
					} );


				});
});

$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 500) {
        $("#header").addClass("scrolling");
    } else {
        $("#header").removeClass("scrolling");

    }
});
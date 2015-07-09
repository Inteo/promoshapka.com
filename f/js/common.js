function catalog_resize() {
	$(".catalog__item").each(function(){
		$width = $(this).width();
		$cont = $(this).find(".catalog__item-content");
		$leftp = $(this).css("padding-left").replace("px", "");
		$rightp = 0;
		if($(this).closest(".catalog").hasClass("catalog_main")) {
			$rightp = $cont.css("padding-right").replace("px", "");
		}
		if($(window).width() <= 480 && $(this).closest(".catalog").hasClass("catalog_main")) {
			$cont.height($width-$leftp-$rightp);
		}
		else {
			if($(this).hasClass("catalog__item_40-20")) {
			$cont.height($width/2-$leftp-$rightp);
			}
			else if($(this).hasClass("catalog__item_20-40")){
				$cont.height($width*2-$rightp);
				if(!$(this).closest(".catalog").hasClass("catalog_main")) {
					$cont.height($cont.height()+201);
				}
			}
			else if($(this).hasClass("catalog__item_40")){
				$cont.height($width-$leftp-$rightp);
			}
			else if($(this).hasClass("catalog__item_small")){
				$temp = $width*2-$leftp;
				$cont.height($temp/2-$rightp);
				if(!$(this).closest(".catalog").hasClass("catalog_main")) {
					$cont.height($cont.height()+100);
				}
			}
		}
		if($(this).closest(".catalog").hasClass("catalog_line")) {
			$(this).closest(".catalog").height($cont.height());
		}
	});
}
$(document).ready(function(){
	catalog_resize();
	$('.catalog:not(.catalog_line)').packery({
	  itemSelector: '.catalog__item',
	});
	$(".modal-inline").fancybox({
		type: 'inline',
		fixed:false,
		maxWidth: "100%",
		title: '',
		padding: 0,
		autoResize: false,
		autoCenter: false,
		fitToView: false,
		helpers: {
			overlay: {
				fixed: false
			}
		}
	});	
});
$(window).resize(function(){
	catalog_resize();
});
$(function(){
	$(".ham-btn").click(function(){
		$(".main-menu_ham").toggleClass("active");
	});
	$(".search-trigger").click(function(){
		$(".catalog-search").toggleClass("active");
		if($(".catalog-search").hasClass("active")){
			$(".catalog-search-close").show();
			$(".catalog-menu ul").hide();
		}
		else{
			$(".catalog-search-close").hide();
			$(".catalog-menu ul").show();
		}
	});
});
$.preloadImages = function() {
  for (var i = 0; i < arguments.length; i++) {
    $("<img />").attr("src", arguments[i]);
  }
}
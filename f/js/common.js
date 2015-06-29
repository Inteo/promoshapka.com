function catalog_resize() {
	$(".catalog__item").each(function(){
		$width = $(this).width();
		$cont = $(this).find(".catalog__item-content");
		$leftp = $(this).css("padding-left").replace("px", "");
		$rightp = $cont.css("padding-right").replace("px", "");
		if($(window).width() <= 480) {
			$cont.height($width-$leftp-$rightp);
		}
		else {
			if($(this).hasClass("catalog__item_40-20")) {
			$cont.height($width/2-$leftp-$rightp);
			}
			else if($(this).hasClass("catalog__item_20-40")){
				$cont.height($width*2-$rightp);
			}
			else if($(this).hasClass("catalog__item_40")){
				$cont.height($width-$leftp-$rightp);
			}
			else if($(this).hasClass("catalog__item_small")){
				$temp = $width*2-$leftp;
				$cont.height($temp/2-$rightp);
			}
		}
	});
}
$(document).ready(function(){
	catalog_resize();
	$('.catalog').packery({
	  itemSelector: '.catalog__item',
	});
	$(".modal-inline").fancybox({
		type: 'inline',
		fixed:false,
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
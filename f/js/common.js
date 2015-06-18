$(document).ready(function(){

});
$(function(){
	$(".ham-btn").click(function(){
		$(".main-menu_ham").toggleClass("active");
	});
	$(".search-trigger").click(function(){
		$(".catalog-search").toggleClass("active");
		if($(".catalog-search").hasClass("active")) 
		{
			$(".catalog-search-close").show();
			$(".catalog-menu ul").hide();
		}
		else 
		{
			$(".catalog-search-close").hide();
			$(".catalog-menu ul").show();
		}
	});
});
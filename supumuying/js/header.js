//head部分

//头部二级菜单

	$(".top_nav").mouseenter(function(){
		
		$(this).children("a").find("img").attr("src","../img/index/top_icon.png").end().end()
				 .find("ul").show();
	})
	$(".top_nav").mouseleave(function(){
		$(this).children("a").find("img").attr("src","../img/index/top_icon2.png").end().end()
				 .find("ul").hide();
	})	


//nav
$(".allShop").mouseenter(function(){
	$(this).css({
		"background":"#e5004a",
		"font-size":"16px"
	}).find("ul").show();
})
$(".allShop").mouseleave(function(){
	$(this).css({
		"background":"",
		"font-size":""
	}).find("ul").hide();
})
$(".allShop ul li").mouseenter(function(){
	$(this).css({
		"background":"#fff",
		"color":"red"
	}).find(".allShop_right").show();
})
$(".allShop ul li").mouseleave(function(){
	$(this).css({
		"background":"",
		"color":"#fff"
	}).find(".allShop_right").hide();
})
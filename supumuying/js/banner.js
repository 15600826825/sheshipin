/*banner*/

//图片轮播
var bannerNum = 0;
var bannerTime = setInterval(changage,5000);
function changage(){
	bannerNum++;
	if(bannerNum>=$(".banner li").size()){
		bannerNum = 0;
	}
	$(".banner a").eq(bannerNum).fadeIn(500).siblings("a").fadeOut(500);
	$(".banner li").eq(bannerNum).addClass("active").siblings("li").removeClass("active");
}
//li切换图片
$(".banner li").mouseenter(function(){
	bannerNum = $(this).index();
	$(".banner a").eq(bannerNum).stop().fadeIn(500).siblings("a").stop().fadeOut(500);
	$(this).addClass("active").siblings().removeClass("active");
})
//左右单击按钮切换图片
$("#leftBtn").click(function(){
	bannerNum--;
	if(bannerNum<0){
		bannerNum = $(".banner li").size()-1;
	}
	$(".banner a").eq(bannerNum).stop().fadeIn(500).siblings("a").stop().fadeOut(500);
	$(".banner li").eq(bannerNum).addClass("active").siblings("li").removeClass("active");
})
$("#rightBtn").click(function(){
	bannerNum++;
	if(bannerNum>$(".banner li").size()-1){
		bannerNum = 0;
	}
	$(".banner a").eq(bannerNum).stop().fadeIn(500).siblings("a").stop().fadeOut(500);
	$(".banner li").eq(bannerNum).addClass("active").siblings("li").removeClass("active");
})
//鼠标移入左右切换按钮
$(".banner").mouseenter(function(){
	clearInterval(bannerTime);
	$(".banner p").stop().fadeIn();
})
$(".banner").mouseleave(function(){
	bannerTime = setInterval(changage,5000);
	$(".banner p").stop().fadeOut();
})
$("#leftBtn").mouseenter(function(){
	$(this).stop().fadeTo(600,0.7);
})
$("#leftBtn").mouseleave(function(){
	$(this).stop().fadeTo(600,0.4);
})
$("#rightBtn").mouseenter(function(){
	$(this).stop().fadeTo(600,0.7);
})
$("#rightBtn").mouseleave(function(){
	$(this).stop().fadeTo(600,0.4);
})
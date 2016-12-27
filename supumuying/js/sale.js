//倒计时
setInterval(function(){
	var now = new Date(); //当前时间
		var nowDate = now.getDate();
		var nowHours = now.getHours();
		var fau = new Date();
		if(nowHours>=10){
			fau.setDate(nowDate+1);
		}else{
			fau.setDate(nowDate+1);
		}
			fau.setHours(10);
			fau.setMinutes(0);
			fau.setSeconds(0);
		var seconds = 1000; 
		var minutes = seconds*60; //60000
		var hours = minutes*60; //3600000
		var days = hours*24; //86400000			
		var cha = fau - now;
		//d 天数
		var d = cha/days;			
		//h 小时
		var h = cha%days/hours; 			
		//分钟
		var m = cha%days%hours/minutes;	
		//秒
		var s = cha%days%hours%minutes/seconds;
		
		var Zh = String(parseInt(h));
		var Zm = String(parseInt(m));
		var Zs = String(parseInt(s));
		if(Zh.length<2){
			Zh = "0" + Zh;
		}
		if(Zm.length<2){
			Zm = "0" + Zm;
		}
		if(Zs.length<2){
			Zs = "0" + Zs;
		}
		
		$("#CD span").eq(0).html(Zh)
		$("#CD span").eq(1).html(Zm)
		$("#CD span").eq(2).html(Zs)
},100)



//main_l倒计时
function main_lDaojishi(endDay){
			var now = new Date(); //当前时间
			var fau = new Date();  //endTime小时后时间
				fau.setDate(now.getDate()+endDay);
				fau.setHours(0);
				fau.setMinutes(0);
				fau.setSeconds(0);
			var seconds = 1000; 
			var minutes = seconds*60; //60000
			var hours = minutes*60; //3600000
			var days = hours*24; //86400000			
			var cha = fau - now;
			//d 天数
			var d = cha/days;			
			//h 小时
			var h = cha%days/hours; 			
			//分钟
			var m = cha%days%hours/minutes;	
			//秒
			var s = cha%days%hours%minutes/seconds;
			if(h==0&&m==0&&s==0){
				clearInterval(main_dDaojishiTime);
			}
			return "还有：" + parseInt(d) + "天" + parseInt(h)+"时"+parseInt(m)+"分"+parseInt(s) + "秒结束";
	}
//随机函数
function Rand(min,max){
	return Math.floor((max-min+1)*Math.random())+min;
}
//dl倒计时
var main_lArr = [];
for(var i=0;i<$(".main_l dl").size();i++){
	var RandDay = Rand(1,6);
	main_lArr.push(RandDay);
}

var main_dDaojishiTime = setInterval(function(){
	for(var i=0;i<$(".main_l dl").size();i++){
		$(".main_l dl").eq(i).find("dt b").html(main_lDaojishi(main_lArr[i]));
	}
	
},100)


//main_l dl划过效果
$(".main_l a").mouseenter(function(){
	$(this).find("p").css("color","#e50072")
			 .end().find("b").css("color","#e50072")
			 .end().find(".shade").css("color","#e5004a");
})
$(".main_l a").mouseleave(function(){
	$(this).find("p").css("color","")
			 .end().find("b").css("color","")
			 .end().find(".shade").css("color","");
})



//main_r
$(".main_r>a").click(function(){
	$(this).removeClass("main_r_active").siblings("a").addClass("main_r_active");
	index = $(this).index();
	$(".twon").eq(index).show().siblings(".twon").hide();
})
var listNum = 0;
$("#prevBtn").click(function(){
	$(".list ul").eq(listNum).show().stop().animate({
		"top":-510
	}).siblings("ul").css("top","540px")
	.end().end().eq(listNum+1).stop().animate({
		"top":10
	})
	listNum++;
	if(listNum>2){
		listNum = 0;
		$(".list ul").eq(0).show().stop().animate({
			"top":10
		}).siblings("ul").css("top","540px")
	}
})
$("#nextBtn").click(function(){
	$(".list ul").eq(listNum).show().stop().animate({
		"top":540
	}).siblings("ul").css("top","-540px")
	.end().end().eq(listNum-1).stop().animate({
		"top":10
	})
	listNum--;
	if(listNum<0){
		listNum = 2;
		$(".list ul").eq(0).show().stop().animate({
			"top":540
		}).siblings("ul").css("top","540px")
	}
})



console.log($(".main_r").offset().left)
//滚动条滚动固定main_r
	var main_rTop = $(".main_r").offset().top;
$(window).scroll(function(){
//	console.log($(document).scrollTop())
	if($(document).scrollTop()>=main_rTop){
		$(".main_r").css({
			"position":"fixed",
			"top":"0",
			"left":"883px"			
		})
	}else{
		$(".main_r").css({
			"position":"",
			"top":"",
			"left":""
		})
	}
})






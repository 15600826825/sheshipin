

//用户名
var user = decodeURI(window.location.href);
for (var i=0;i<user.length;i++) {
	if(user[i]=="?"){
		console.log(1)
		user = user.split("?")[1].split("=")[1];
		$(".User").html('欢迎<a href="#">['+user+']</a>来到速普商城！')
	}
	
}















//main_b
var mainBNum;
//确认下标
function enterIndex(){
	//获取时间并显示倒计时
	var nowTimeHour = new Date().getHours();
	if(nowTimeHour>=8&&nowTimeHour<10){
		mainBNum = 0;
		$(".main_b ul li").eq(mainBNum).find("h3").html(daojishi(0,10));
	}else if(nowTimeHour>=10&&nowTimeHour<12){
		mainBNum = 1;
		$(".main_b ul li").eq(mainBNum).find("h3").html(daojishi(1,12));
	}else if(nowTimeHour>=12&&nowTimeHour<14){
		mainBNum = 2;
		$(".main_b ul li").eq(mainBNum).find("h3").html(daojishi(2,14));
	}else if(nowTimeHour>=14&&nowTimeHour<16){
		mainBNum = 3;
		$(".main_b ul li").eq(mainBNum).find("h3").html(daojishi(3,16));
	}else if(nowTimeHour>=16&&nowTimeHour<18){
		mainBNum = 4;
		$(".main_b ul li").eq(mainBNum).find("h3").html(daojishi(4,18));
	}else if(nowTimeHour>=18&&nowTimeHour<20){
		mainBNum = 5;
		$(".main_b ul li").eq(mainBNum).find("h3").html(daojishi(5,20));
	}else if(nowTimeHour>=20&&nowTimeHour<22){
		mainBNum = 6;	
		$(".main_b ul li").eq(mainBNum).find("h3").html(daojishi(6,22));
	}else if(nowTimeHour>=22&&nowTimeHour<24){
		mainBNum = 7;
		$(".main_b ul li").eq(mainBNum).find("h3").html(daojishi(7,24));
	};
}
enterIndex();
var daojishiTime = setInterval(function(){
	enterIndex();
},100)

//倒计时
function daojishi(num,endTime){
			$(".main_b ul li").eq(num).find("h3").show();
			var now = new Date(); //当前时间
			var fau = new Date();  //两小时后时间
				fau.setHours(endTime);
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
				clearInterval(daojishiTime);			
				$(".main_b ul li").eq(num).find("h3").hide();
//b标签和p标签样式及内容修改
				setTimeout(function(){
					$(".main_b ul li").eq(mainBNum).prevAll().find("p").html("已结束<img src='img/index/main_b_icon.png'/>");
					$(".main_b ul li").eq(mainBNum).addClass("qiangGo").siblings().removeClass("qiangGo")
					                         .end().find("p").show().html($(".main_b ul li").eq(mainBNum).find("b").html() + " 疯抢中<img src='img/index/main_b_icon.png'/>")
					                         .next().html("距结束").addClass("showB");
					$(".main_b ul li").eq(mainBNum).prevAll().find("b").removeClass("showB")
				                         	.end().end().nextAll().find("b").addClass("showB");
				},2000)
			}
			return "0" + parseInt(h)+":"+parseInt(m)+":"+parseInt(s);
	}
//b标签和p标签样式及内容修改
$(".main_b ul li").eq(mainBNum).prevAll().find("p").html("已结束<img src='img/index/main_b_icon.png'/>");
$(".main_b ul li").eq(mainBNum).addClass("qiangGo").siblings().removeClass("qiangGo")
                         .end().find("p").show().html($(".main_b ul li").eq(mainBNum).find("b").html() + " 疯抢中<img src='img/index/main_b_icon.png'/>")
                         .next().html("距结束").addClass("showB");
$(".main_b ul li").eq(mainBNum).prevAll().find("b").removeClass("showB")
                         .end().end().nextAll().find("b").addClass("showB");

//li鼠标事件
$(".main_b ul li").eq(mainBNum).nextAll().mouseenter(function(){
	$(this).find("p").show(500);
	$(this).find("p").html($(this).find("b").html()+" 开始<img src='img/index/main_b_icon.png'/>")
	
})
$(".main_b ul li").eq(mainBNum).nextAll().mouseleave(function(){
	$(this).find("p").hide(500);
})
$(".main_b ul li").eq(mainBNum).prevAll().mouseenter(function(){
	$(this).find("p").show(500);
})
$(".main_b ul li").eq(mainBNum).prevAll().mouseleave(function(){
	$(this).find("p").hide(500);
})


/*main_c*/
//鼠标滑过离开
$(".main_c ul li").mouseenter(function(){
	if($(this).find("h3").hasClass("lootShow")){    //检测h3是否有类名，返回布尔值
		
	}else{
		$(this).find("div").show(500,function(){
			$(this).find("h4").animate({
				"left":23
			})
		});
	}	
})
$(".main_c ul li").mouseleave(function(){
	if($(this).find("h3").hasClass("lootShow")){    //检测h3是否有类名，返回布尔值
		
	}else{		
		$(this).find("h4").animate({
			"left":-94
		},function(){
			$(this).parent().hide(500)
		})
	}	
})


//main_d倒计时
function main_dDaojishi(endDay){
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
/*main_d*/
$(".main_d dl dt").mouseenter(function(){
	$(this).find("div").stop().slideDown(300,function(){
		$(this).find("p").stop().slideDown(300).next("b").stop().slideDown(500);
	})
})
$(".main_d dl dt").mouseleave(function(){
	$(this).find("p").stop().slideUp(300).next("b").stop().slideUp(500)
			  .parent().stop().slideUp(300);
})
//dl倒计时
var main_dArr = [];
for(var i=0;i<$(".main_d dl").size();i++){
	var RandDay = Rand(1,6);
	main_dArr.push(RandDay);
}

var main_dDaojishiTime = setInterval(function(){
	for(var i=0;i<$(".main_d dl").size();i++){
		$(".main_d dl").eq(i).find("dd").html(main_dDaojishi(main_dArr[i]));
	}
	
},100)


/*mian_e*/
//main_e左边轮播
//自动轮播
setInterval(pic_lunbo,2000);
var picNum = 0;
function pic_lunbo(){
	$(".pic img").eq(picNum).css("z-index","10").siblings("img").css({
						"z-index":0,
						"left":197
					})
					   .end().animate({
					   	"left":-150
					   }).end().eq(picNum+1).animate({
					   	"left":25
					   })
	$(".pic_b img").eq(picNum).css("z-index","10").siblings("img").css({
						"z-index":0,
						"left":197
					})
					   .end().animate({
					   	"left":-150
					   }).end().eq(picNum+1).animate({
					   	"left":25
					   })
	$(".pic_c img").eq(picNum).css("z-index","10").siblings("img").css({
						"z-index":0,
						"left":197
					})
					   .end().animate({
					   	"left":-150
					   }).end().eq(picNum+1).animate({
					   	"left":25
					   })
	$(".pic_d img").eq(picNum).css("z-index","10").siblings("img").css({
						"z-index":0,
						"left":197
					})
					   .end().animate({
					   	"left":-150
					   }).end().eq(picNum+1).animate({
					   	"left":25
					   })
	$(".pic_e img").eq(picNum).css("z-index","10").siblings("img").css({
						"z-index":0,
						"left":197
					})
					   .end().animate({
					   	"left":-150
					   }).end().eq(picNum+1).animate({
					   	"left":25
					   })				   
	picNum++;
	if(picNum==5){
		picNum = 0;
		$(".pic img").eq(0).css("z-index","10").siblings("img").css({
						"z-index":0,
						"left":197
					})
					   .end().animate({
					   	"left":25
					   });
		$(".pic_b img").eq(0).css("z-index","10").siblings("img").css({
						"z-index":0,
						"left":197
					})
					   .end().animate({
					   	"left":25
					   });
		$(".pic_c img").eq(0).css("z-index","10").siblings("img").css({
						"z-index":0,
						"left":197
					})
					   .end().animate({
					   	"left":25
					   });	
		$(".pic_d img").eq(0).css("z-index","10").siblings("img").css({
						"z-index":0,
						"left":197
					})
					   .end().animate({
					   	"left":25
					   });	
		$(".pic_e img").eq(0).css("z-index","10").siblings("img").css({
						"z-index":0,
						"left":197
					})
					   .end().animate({
					   	"left":25
					   });			   
	}
}
//中间图片放大
$(".main_e_dome_c img").mouseenter(function(){
	$(this).stop().animate({
		"width":450,
		"height":500,
		"top":-25,
		"left":-25
	})
})
$(".main_e_dome_c img").mouseleave(function(){
	$(this).stop().animate({
		"width":399,
		"height":442,
		"top":0,
		"left":0
	})
})
//右边图片左移
$(".main_e_dome_r ul li").mouseenter(function(){
	$(this).find("img").stop().animate({
		"left":10
	},400)
})
$(".main_e_dome_r ul li").mouseleave(function(){
	$(this).find("img").stop().animate({
		"left":20
	},400)
})


$("#close").click(function(){
	$(".ft_fixed").hide();
})













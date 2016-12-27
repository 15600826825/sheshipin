//ajax传图片
$(function(){
	url = location.href;
	id = url.split("?")[1];
	$.ajax({
		type:"get",
		url:"../data/shop.json",
		async:true,
		success:function(glist){
			var html = "";
			var num = 0;
			for (var i=0;i<glist.list.length;i++) {
				if(id==glist.list[i].id){
					num = i;
					html = '<div class="magMin"><img src="../img/'+glist.list[i].src+'.jpg"/><div class="area"></div><div class="magMax"><img src="../img/'+glist.list[i].src+'.jpg"/></div></div><ul><li><img src="../img/'+glist.list[i].src+'.jpg" /></li><li><img src="../img/date/mag_b.jpg" /></li><li><img src="../img/date/mag_c.jpg" /></li><li id="leftBtn"><</li><li id="rightBtn">></li></ul><div class="fenxiang">分享<img src="../img/date/weixin.png" alt="" /><img src="../img/date/weibo.png" alt="" /><img src="../img/date/kongjian.png" alt="" /><img src="../img/date/qq.png" alt="" /><img src="../img/date/gengduo.png" alt="" /></div>'
				}
			}
			$(".main_t dt").html(html);
			$(".main_t").on("mouseenter","ul li",function(){
							index = $(this).index();
							if(index==0){
								$(".magMin img").attr("src","../img/"+glist.list[num].src+".jpg");
							}else if(index==1){
								$(".magMin img").attr("src","../img/date/mag_b.jpg");
							}else if(index==2){
								$(".magMin img").attr("src","../img/date/mag_c.jpg");
							}
						}
			)
			
			
			//放大镜
$(".magMin").on("mouseenter",function(e){
							var e = e || event;
							var rex = $(this).offset().left+$(".area").outerWidth()/2;
							var rey = $(this).offset().top+$(".area").outerHeight()/2;
							var maxLeft = $(this).width()-$(".area").width();
							var maxTop = $(this).height()-$(".area").height();
							$(".area").show();
							$(".magMax").show();
							$(document).on("mousemove",function(ev){
								var ev = ev || event;
								var left = ev.clientX-rex;
								var top = ev.clientY-rey+$(window).scrollTop();
								if(left<0){
									left = 0;
								}else if(left>maxLeft){
									left = maxLeft;
								}
								if(top<0){
									top = 0;
								}else if(top>maxTop){
									top = maxTop;
								}
								$(".area").css({
									"left":left+"px",
									"top":top+"px"
								})
								$(".magMax img").css({
									"left":-left*2+"px",
									"top":-top*2+"px"
								})
							})
						})
$(".magMin").mouseleave(function(){
	$(".area").hide();
	$(".magMax").hide();
})


		}
	});
})







//省市区三级联动
new PCAS('location_p', 'location_c', 'location_a', '', '', '');




//订单
$(".yunfei_bot").mouseenter(function(){
	$(this).css("background","url(../img/date/yunfei_b.png) no-repeat right center")
			.find(".dingdan").show();
})
$(".yunfei_bot").mouseleave(function(){
	$(this).css("background","url(../img/date/yunfei_a.png) no-repeat right center")
			.find(".dingdan").hide();
})

function Rand(min,max){
	return Math.floor((max-min+1)*Math.random())+min;
}
var endDay = Rand(1,6)
//倒计时
setInterval(function(){
	var now = new Date(); //当前时间
		var nowDate = now.getDate();
		var nowHours = now.getHours();
		var fau = new Date();
		fau.setDate(now.getDate()+endDay);
		fau.setHours(00);
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
		
		var Zd = String(parseInt(d));
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
		
		$(".main_tr_ct p span").eq(0).html(Zd);
		$(".main_tr_ct p span").eq(1).html(Zh);
		$(".main_tr_ct p span").eq(2).html(Zm);
		$(".main_tr_ct p span").eq(3).html(Zs);
},100)


//购物数量
var goNum = 2;
$("#jia").click(function(){
	goNum++;
	if(goNum<2){
		goNum = 2;
	}else if(goNum>99){
		goNum = 99;
	}
	$("#txtNum").val(goNum);
	$(".b46").html(goNum*23);
})
$("#jian").click(function(){
	goNum--;
	if(goNum<2){
		goNum = 2;
	}else if(goNum>99){
		goNum = 99;
	}
	$("#txtNum").val(goNum);
	$(".b46").html(goNum*23);
})
var reNum = /^\d+$/;
$("#txtNum").focus(function(){
	that = $(this);
	$(document).keyup(function(){
		var reLeng = that.val().length;
		if(reNum.test(that.val())){
			var shopNum = parseInt(that.val());
			goNum = shopNum;
			if(shopNum>2){

			}else{
				that.val(2);
			}
		}else{
			that.val(2);
		}
		if(shopNum<2){
			that.val(2);
		}else if(shopNum>99){
			that.val(99);
		}
		$(".b46").html(that.val()*23);
	})
})


var scTop = $(".xiang").offset().top;

$(".xiang li").click(function(){
	$(this).addClass("active").siblings("li").removeClass("active");
	index = $(this).index();
	$(".tab").eq(index).show().siblings(".tab").hide();
	if($(window).scrollTop()>scTop){
		$("body,html").animate({
			"scrollTop":scTop-10+"px"
		})
	}
})
var pic = true;
$(".minPic").click(function(){
	if(pic){
		$(".maxPic").show(500);
		pic = false;
	}else{
		$(".maxPic").hide(500);
		pic = true;
	}
})


$(window).scroll(function(){
	if($(window).scrollTop()>=scTop){
		$(".xiang").css({
			"position":"fixed",
			"top":"-10px",
			"left":"247px"
		})
	}else{
		$(".xiang").css({
			"position":"",
			"top":"",
			"left":""
		})
	}
})









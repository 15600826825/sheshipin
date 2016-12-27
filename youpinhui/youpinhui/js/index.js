$(function(){
//公告轮播
		var zi_index = 0;
		setInterval(function(){
			$(".topLB").eq(zi_index).show().siblings(".topLB").hide().css("top","20px")
			.end().animate({
				"top":-20
			}).end().eq(zi_index+1).show().animate({
				"top":0
			})
			zi_index++;
			if(zi_index>3){
				zi_index = 0;
				$(".topLB").eq(0).show().siblings(".topLB").hide().css("top","20px")
						   .end().animate({
								"top":-0
							})
			}
		},2000)


//二维码
	$(".dh>li").last().mouseenter(function(){
		$(this).next().css("display","block")
	})
	$(".dh>li").last().mouseleave(function(){
		$(this).next().css("display","")
	})
	
//搜索框
	$(".logo input").focus(function(){
		$(this).val("").css("outline","none");//css.("outline-color","red")改变浏览器默认边框颜色
	})
	
	$(".logo input").blur(function(){
		$(this).val("请输入商品名称或货号");
	})
	
//购物车
	$(".gouwuche").hover(
		function(){
			$(this).css("border-bottom","none")
			$(this).find("ul").show();
			var odown = $(this).find("#down");
			odown.animate({
				"height":0,
				"top":16
			},1,function(){
				odown.hide();
				odown.next().show().animate({
					"height":12,
					"top":10
				})
			})
		},
		
		function(){
			$(this).css("border-bottom","")
			$(this).find("ul").hide();
			var oup = $(this).find("#up");
			oup.animate({
				"height":0,
				"top":16
			},1,function(){
				oup.hide();
				oup.prev().show().animate({
					"height":12,
					"top":10
				})
			})
		}
	)



//显示列表
	
	//获取列表内容
	$.ajax({
		type:"get",
		url:"json/liststyle.json",
		async:true,
		success:function(list){
			var html='';
			for(var i in list){	
				var b=list[i];
	//			console.log(list.length)				
					html+='<dl><dt><img src="'+b.src+'" /><b class="'+b.clas+'">'+b.name+'</b></dt><dd><a href="list.html">'+b.a1+'</a><a href="list.html">'+b.a2+'</a><a href="list.html">'+b.a3+'</a><a href="list.html">'+b.a4+'</a><a href="list.html">'+b.a5+'</a><a href="list.html">'+b.a6+'</a><a href="list.html">'+b.a7+'</a></dd></dl>';									
			}
			$(".liststyles").html(html);
		}

		
	
	});

	



//上下箭头
	$(".list").hover(
		function(){
			$(this).find(".liststyles").show();
			var odown = $(this).find("#xia");
			odown.animate({
				"height":0,
				"top":20
			},1,function(){
				odown.hide();
				odown.next().show().animate({
					"height":16,
					"top":12
				})
			})
		},
		
		function(){
			$(this).find(".liststyles").hide();
			var oup = $(this).find("#shang");
			oup.animate({
				"height":0,
				"top":20
			},1,function(){
				oup.hide();
				oup.prev().show().animate({
					"height":16,
					"top":12
				})
			})
		}
	)
	

	
	
	
//banner轮播
		var index=0;
		var time=setInterval(lunbo,3000);
		function lunbo(){
			$(".yuan div").eq(index).addClass("active").siblings().removeClass("active");
			$(".pic li").eq(index).stop().fadeIn(500).siblings("li").stop().fadeOut(500);
			index++;
			if(index==5){
				index=0;
			}
		}
//		圆点切换
		$(".yuan div").mouseenter(function(){
			index=$(this).index();
			lunbo()
		})
//		左右按钮切换
		$("#anniu_l").click(function(){
			index--;
			if(index<0){
				index = 4;
			}
			$(".yuan div").eq(index).addClass("active").siblings().removeClass("active");
			$(".pic li").eq(index).fadeIn(500).siblings("li").fadeOut(500);
		})
		$("#anniu_r").click(function(){
			index++;
			if(index>4){
				index = 0;
			}
			$(".yuan div").eq(index).addClass("active").siblings().removeClass("active");
			$(".pic li").eq(index).fadeIn(500).siblings("li").fadeOut(500);
		})
	//显示左右按钮
		$(".banner").mouseenter(function(){
			clearInterval(time);
			$(".an").css("display","block");
		})
		$(".banner").mouseleave(function(){
			time=setInterval(lunbo,3000);
			$(".an").css("display","none")
		})
		
//main左侧二维码
		$(window).scroll(function(){
			
			var scrollHeight=$(document).scrollTop();
//			console.log(scrollHeight);
//			var weimaHeight=$(".weima").offset().top;
//			console.log(weimaHeight);
			if(scrollHeight>=550){
				$(".erweima").css({
					"position":"fixed",
					"left":"20px",
					"top":"25px"
				})
			}else{
				$(".erweima").css({
					"position":"",
					"left":"",
					"top":""
				})
			}
		})
		

//main轮播
var big_index=0;
		var timer=setInterval(lunbotu,2000);		
		function lunbotu(){
//			$(".boxl ol li").eq(big_index).addClass("active").siblings().removeClass("active");
			var left=big_index * 100+"px";
//			console.log(left);
			$(".boxl .huaguo").animate({"left":left});
			$(".bigdl dl").eq(big_index).fadeIn().siblings("dl").fadeOut();
			big_index++;
			if(big_index>=6){
				big_index=0;
			}
		}
		
		$(".boxl ol li").mouseenter(function(){
			big_index = $(this).index();
//			$(this).addClass("active").siblings().removeClass("active");
			
			var left=big_index * 100 + "px";
//			console.log(leftx);
			$(".boxl .huaguo").stop().animate({"left":left});
			$(".bigdl dl").eq(big_index).stop().fadeIn().siblings().stop().fadeOut();
			clearInterval(timer);
		})
		$(".boxl ol li").mouseleave(function(){

			timer=setInterval(lunbotu,2000);
			
		})
		
//改变图片的透明度
		$(".shipin dt").find("img").fadeTo(0,0.7);
		$(".shipin dt").find("img").mouseenter(function(){
			$(this).fadeTo(0,1)							
		})
		$(".shipin dt").find("img").mouseleave(function(){
			$(this).fadeTo(0,0.7)
		
		})

//24小时直播  切图
		var index=0;
		$(".niu_l").click(function(){
			$(".zhibo li").eq(index).addClass("show").siblings("li").removeClass("show")
			index--;
			if(index<0){
				index=0;
			}
		})
		$(".niu_r").click(function(){
			$(".zhibo li").eq(index).addClass("show").siblings("li").removeClass("show")
			index++;
			if(index>6){
				index=5;
			}
		})

//随机函数


		function Rand(min,max){
			return Math.floor((max-min+1)*Math.random())+min;
		}
//倒计时
	var endDay = Rand(1,6)
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
	//		
	//		$(".timer span").eq(0).html(Zd);
	//		$(".timer span").eq(1).html(Zh);
	//		$(".timer span").eq(2).html(Zm);
	//		$(".timer span").eq(3).html(Zs);
		$(".jl").html("距离结束仅剩"+" "+Zh+':'+Zm+':'+Zs);
	},100)


//json传参

	$.ajax({
		type:"get",
		url:"json/index.json",
		async:true,
		success:function(msg){		
			for (var i in msg) {
//				console.log(msg)
				var html = "";
				for (var j=0;j<msg[i].length;j++) {
					var a = msg[i][j];
//					console.log(a)
					html += '<div class="picBox" data-id="'+a.id+'"><dl class="picbox"><dt><img src="'+a.src+'"/></dt><dd><a href="#">'+a.name+'</a><span class="ms">'+a.mais+'</span><div class="pricebox"><div class="pric">'+a.price+'<span class="zj">'+a.zj+'</span><span class="by">'+a.by+'</span></div><p><span>'+a.number+'人</span>已购买</p></div></dd></dl><div class="ppai"><span class="gn">品牌，国内发货</span><span class="jl"></span></div></div>';
					
				}
				$(".jianbt").html(html);
			}
			//点击之后跳转到详情页
			$(".picBox").click(function(){
				
				window.location.href = "detailsPage.html?id="+$(this).attr("data-id");
			})
		}
	});
	
//获取用户名
	var user = getCookie("username");//asdfasdf
//		console.log(user);
		if(user){
			
			//用户名框出现
			
			$("#dh2").css("display","block");
		
			//将得到的cookie字符串的3，，4,5位用*代替
			
			var lastCookie = user.replace(user.substr(3,4),"***");
			
			//console.log(lastCookie);//测试通过fs***sf
			
			//将最后的lastCookie放到“你好！”后面
			
			$("#dh2").find("span").html(lastCookie);
			
			//原来的登录注册框消失
			
			$("#dh1").css("display","none");
			
			//点击“退出时”，清空“userName”的cookie,并且“userName_get"display:none;显示登录注册栏"
			
			$("#dh2").find(".out").click(function(){
				
				//console.log(1);//事件测试通过
				
				//清空“username”的cookie
				
				removeCookie("username");
				
				//用户名框消失
			
				$("#dh2").css("display","none");
				
				
				//原来的登录注册框出现
				
				$("#dh1").css("display","block");
			})
		}

})			

		
	
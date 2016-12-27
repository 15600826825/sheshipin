$(function(){
	//二维码
	$(".dh>li").last().mouseenter(function(){
		$(this).next().css("display","block")
	})
	$(".dh>li").last().mouseleave(function(){
		$(this).next().css("display","")
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
//搜索框
	$(".logo input").focus(function(){
		$(this).val("").css("outline","none");//css.("outline-color","red")
	})
	
	$(".logo input").blur(function(){
		$(this).val("请输入商品名称或货号");
	})
	
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
					html+='<dl><dt><img src="'+b.src+'" /><b class="'+b.clas+'">'+b.name+'</b></dt><dd><a href="#">'+b.a1+'</a><a href="#">'+b.a2+'</a><a href="#">'+b.a3+'</a><a href="#">'+b.a4+'</a><a href="#">'+b.a5+'</a><a href="#">'+b.a6+'</a><a href="#">'+b.a7+'</a></dd></dl>';									
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

/*、、、、、order_nav、、、、*/	
	$(".order_nav").find("dd").click(function(){
		$(this).eq(index)
			.addClass("order_active")
			.siblings()
			.removeClass("order_active");
	})
	
/*、、、、dd_list、、、、、*/
	$(".con_lis").mouseenter(function(){
		$(".dd_list").show();
	})
	$(".con_lis").mouseleave(function(){
		$(".dd_list").hide();
	})
	
/*、、、、、myugbot、、、、*/	
	$(".myugbot dd").find("a").click(function(){
		index=$(this).index();
		$(this).eq(index)
			.css("background","url(img/vipbg.jpg) no-repeat")
			.siblings("a")
			.css("background"," " );
	})


/*、、、、、、、商品展示轮播图、、、、、、、*/	
	var index=0;
	var timer=setInterval(lunbo,3000);
	function lunbo(){
		
		$(".circle a").eq(index).addClass("circle_show").siblings("a").removeClass("circle_show");
		$(".hot_show ul").eq(index).stop().fadeIn(500).siblings("ul").stop().fadeOut(500);
		index++;
		if(index==3){
			index=0
		}
	}
//	圆点切换
	$(".circle").find("a").mouseenter(function(){
		index=$(this).index();
		lunbo();
	})
//	按钮切换
	$(".lft").click(function(){
		index--;
		if(index<0){
			index=2;
		}
		$(".circle a").eq(index).addClass("circle_show").siblings("a").removeClass("circle_show");
		$(".hot_show ul").eq(index).stop().fadeIn(500).siblings("ul").stop().fadeOut(500);
	})
	$(".rgt").click(function(){
		index++;
		if(index>2){
			index=0;
		}
		$(".circle a").eq(index).addClass("circle_show").siblings("a").removeClass("circle_show");
		$(".hot_show ul").eq(index).stop().fadeIn(500).siblings("ul").stop().fadeOut(500);
	})
	
	//用户登录		
			var user = getCookie("username");//asdfasdf
			//		console.log(user);
		
			//将得到的cookie字符串的3，，4,5位用*代替
			
			var lastCookie = user.replace(user.substr(3,4),"***");
			
			//将最后的lastCookie放到“你好！”后面
			
			$(".sj").find("span").html(lastCookie);	
		
		$(".dh").find(".out").click(function(){
			removeCookie("username");
		})

})

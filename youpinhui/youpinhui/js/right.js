


//页头 二维码

	$(".dh>li").last().mouseenter(function(){
		$(this).next().css("display","block")
	})
	$(".dh>li").last().mouseleave(function(){
		$(this).next().css("display","")
	})
//footer
	$('.foot').load('footer.html');
//页面右侧划过效果
	$('.righ').load('right.html',function(){
	
				$(".right_t li").mouseenter(function(){
					$(this).addClass("activeLi")
							.find("i")	
							.addClass("activeLi")
							.css("background","red")
							.end()
							.css({
								"border-radius":0,
								"background":"red"
							});
					$(this).find(".s").css("background","red").stop().animate({"left":-62});
					$(this).find(".numb").css({
						"color":"red",
						"background":"white"
					});
				})
				$(".right_t li").mouseleave(function(){
					$(this).removeClass("activeLi")
							.find("i")	
							.removeClass("activeLi")
							.css("background","")
							.end()
							.css({
								"border-radius":"3px 0 0 3px",
								"background":""
							});
					$(this).find(".s").css("background"," #7a6e6e").stop().animate({"left":0});
					$(this).find(".numb").css({
						"color":"",
						"background":""
					})
				})
				
				$(".right_b li").mouseenter(function(){
					$(this).addClass("activeLi")
								.find("i")
								.addClass("activeLi")
								.css("background","red")
								.end()
								.css({
									"border-radius":0,
									"background":"red"
								})
					$(this).find(".s").css("background","red").stop().animate({"left":-62})
				})
				$(".right_b li").mouseleave(function(){
					$(this).removeClass("activeLi")
								.find("i")
								.removeClass("activeLi")
								.css("background","")
								.end()
								.css({
									"border-radius":"3px 0 0 3px",
									"background":""
								})
					$(this).find(".s").css("background"," #7a6e6e").stop().animate({"left":0})
				})
				//返回顶部
				$(".right_b li").last().click(function(){
					
					$(document).scrollTop(0);
									
				})	
	
			});


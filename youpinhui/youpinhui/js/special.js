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
		$(this).val("").css("outline","none");//css.("outline-color","red")改变浏览器默认边框颜色
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
	);
	
	
//banner右侧二维码
		$(window).scroll(function(){
			
			var scrollHeight=$(document).scrollTop();
//			console.log(scrollHeight);
//			var weimaHeight=$(".weima").offset().top;
//			console.log(weimaHeight);
			if(scrollHeight>=230){
				$(".tufloat").css({
					"position":"fixed",
					"right":"25px",
					"top":"25px"
				})
			}else{
				$(".tufloat").css({
					"position":"",
					"right":"",
					"top":""
				})
			}
		})

/*、、、、、、、、、、、、、main、、、、、、、、、、、、、、、*/

/*	精选特惠款 放肆购		*/
		
		$.ajax({
			type:"get",
			url:"json/special-1.json",
			async:true,
			success:function(msg1){
				var html='';
				
				for(var i in msg1){
					var a=msg1[i];
//					console.log(msg1[i]);
					html+='<dl class="main_box1-top" data-special_top="'+a.special_top+'"><dt><img src="'+a.src+'"/></dt><dd><b>'+a.name+'</b><div class="liji"><p>抢购价：<span>'+a.sprice+'</span></p><a href="#"><img src='+a.src2+'/></a></div></dd></dl>'
				}
				$("#main_box1").html(html);
				//点击跳转到详情页
				$(".main_box1-top").click(function(){
					window.location.href="detailsPage.html?special_top="+$(this).attr("data-special_top");
				})
			}
		});

/*	一口价囤货款 差价双倍返	*/
		
		$.ajax({
			type:"get",
			url:"json/special-2.json",
			async:true,
			success:function(msg2){				
				var html='';
				for(var i in msg2){
					var b=msg2[i];
					html+='<dl><dt><img src="'+b.src+'"/></dt><dd><b>'+b.name+'</b><div class="liji"><p>抢购价：¥<span>'+b.sprice+'</span></p><a href="#"><img src="'+b.src2+'"/></a></div></dd></dl>'
				}
				$("#main_box2").html(html);
			}
		});

/*	既要补 还要瘦 美食1折起	*/
		
		$.ajax({
			type:"get",
			url:"json/special-3.json",
			async:true,
			success:function(msg3){				
				var html='';
				for(var i in msg3){
					var c=msg3[i];
					html+='<dl><dt><img src="'+c.src+'"/></dt><dd><b>'+c.name+'</b><div class="liji"><p>抢购价：¥<span>'+c.sprice+'</span></p><a href="#"><img src="'+c.src2+'"/></a></div></dd></dl>'
				}
				$("#main_box3").html(html);
			}
		});

/*	既要美 还要润 美妆1折起	*/

		$.ajax({
			type:"get",
			url:"json/special-4.json",
			async:true,
			success:function(msg4){				
				var html='';
				for(var i in msg4){
					var d=msg4[i];
					html+='<dl><dt><img src="'+d.src+'"/></dt><dd><b>'+d.name+'</b><div class="liji"><p>抢购价：¥<span>'+d.sprice+'</span></p><a href="#"><img src="'+d.src2+'"/></a></div></dd></dl>'
				}
				$("#main_box4").html(html);
			}
		});

/*	实用又超值 家居89元起	*/

		$.ajax({
			type:"get",
			url:"json/special-5.json",
			async:true,
			success:function(msg5){				
				var html='';
				for(var i in msg5){
					var e=msg5[i];
					html+='<dl><dt><img src="'+e.src+'"/></dt><dd><b>'+e.name+'</b><div class="liji"><p>抢购价：¥<span>'+e.sprice+'</span></p><a href="#"><img src="'+e.src2+'"/></a></div></dd></dl>'
				}
				$("#main_box5").html(html);
			}
		});

/*	既要暖 又要潮 服饰5折起	*/

		$.ajax({
			type:"get",
			url:"json/special-6.json",
			async:true,
			success:function(msg6){				
				var html='';
				for(var i in msg6){
					var f=msg6[i];
					html+='<dl><dt><img src="'+f.src+'"/></dt><dd><b>'+f.name+'</b><div class="liji"><p>抢购价：¥<span>'+f.sprice+'</span></p><a href="#"><img src="'+f.src2+'"/></a></div></dd></dl>'
				}
				$("#main_box6").html(html);
			}
		});

/*	既要抢眼 又要时尚 珠宝1折起	*/

		$.ajax({
			type:"get",
			url:"json/special-7.json",
			async:true,
			success:function(msg7){				
				var html='';
				for(var i in msg7){
					var g=msg7[i];
					html+='<dl><dt><img src="'+g.src+'"/></dt><dd><b>'+g.name+'</b><div class="liji"><p>抢购价：¥<span>'+g.sprice+'</span></p><a href="#"><img src="'+g.src2+'"/></a></div></dd></dl>'
				}
				$("#main_box7").html(html);
			}
		});
		
/*	全球优选 海淘2折起	*/		
		
		$.ajax({
			type:"get",
			url:"json/special-8.json",
			async:true,
			success:function(msg9){				
				var html='';
				for(var i in msg9){
					var h=msg9[i];
					html+='<dl><dt><img src="'+h.src+'"/></dt><dd><b>'+h.name+'</b><div class="liji"><p>抢购价：¥<span>'+h.sprice+'</span></p><a href="#"><img src="'+h.src2+'"/></a></div></dd></dl>'
				}
				$("#main_box8").html(html);
			}
		});
		
		
})
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
//瀑布流

function pro_list_all_pic(){
	
		var juddge = false;//定义变量判断是否具备生成新商品的条件
		
		var countNumber = 0;
		
		//计算一共有多少个9个页面，每次加载9个商品
				
		var num = 9;//定义每次加载的图片
		
		
		//利用ajax动态生成产品列表，添加到“所有商品”的ul中,默认出现的一批图
			$.ajax({
			
				url:"json/list.json",
				
				type:"GET",
				
				success:function(res){
					
					//console.log(res);//获取成功
						
						for ( var i=0; i<=8;i++){
			
							var op=$("<li data-name="+res.pic[i].name+"><img src='"+res.pic[i].src+"'/><span><b>会员评价：</b><br />“包装仔细，锅具做工不错。”</span></li>");
				
							$(".picb").prepend(op);
						}
						
						juddge = true;
					
						
						var height=$(".picb li").size()/3*462+"px";
						//console.log(height);
						$(".picb").css("height",height);
				
				
				//点击后图片跳转到详情页
						$(".picb li").click(function(){
								window.location.href = "detailsPage.html?name="+$(this).attr("data-name");
						})
							
				//main图片加长效果
						$(".picb li").mouseenter(function(){
							$(this).css({
								"border-color":"#fa531b",
								"z-index":"10"
							})
								.stop()
								.animate({"height":"487px"},500)
								.find("span").slideDown(500)
					
						})
						$(".picb li").mouseleave(function(){
							$(this).css({
								"border-color":""
							})
								.stop()
								.animate({"height":"437px"},500,function(){
									$(this).css("z-index","3")
								})
								.find("span").slideUp(500)
						})
							
								
				//		picb  li  定位
						for (var i=0;i<$(".picb li").size()/3;i++) {
				//			console.log($(".picb li").size())
							for (var j = 0;j<3;j++) {
								if(i==0){
									$(".picb li").eq(j).css({
										"top":0,
										"left":330*j+"px"
									})
								}else if(i>0){
									$(".picb li").eq(j+3*i).css({
										"top":459*i+"px",
										"left":330*j+"px"
									})
				
				//				}else if(i==2){
				//					$(".picb li").eq(j+6).css({
				//						"top":459*2+"px",
				//						"left":323*j+"px"
				//					})
								}
							}
						}
						
					
				}
					
			})
	//ajax结束
	
	//当滚动条的高度大于最后一张图片相对顶部的高度时，加载下一批，加载完一批后才能加载下一批
	
	$(window).scroll(function(){
		
		//console.log($(document).scrollTop());//测试通过
		
		//console.log($("#pro_list_all_pic").find("li:last").offset().top);//测试最后一张高度通过
		
		var gundongtiao = $(document).scrollTop();//滚动条高度
				
		var lastLi  = $("#picb").find("li:last").offset().top;//最后li的高度
		
		//console.log(lastLi)
		//判断滚动条的高度是否比最后一个li的高度高
				
		if(gundongtiao > lastLi && juddge == true){
					
			countNumber ++;
	
		//利用ajax动态生成产品列表，添加到“所有商品”的ul中
	
		$.ajax({
			
			url:"json/list.json",
			
			type:"GET",
			
			success:function(res){
				
				//console.log(num);//获取成功
				
				var count = Math.ceil(res.pic.length/num);
				
				//console.log(count);
				//console.log(countNumber)
				//当不超过所有的页面数量时，可以加载，否则不能加载
				
				if(countNumber <= count ){
					
					//for 循环，链接字符串
					
					for ( var i=(countNumber*9); i<=((countNumber+1)*9-1);i++){
						
						if(i<res.pic.length){
							var op=$("<li data-name="+res.pic[i].name+"><img src='"+res.pic[i].src+"'/><span><b>会员评价：</b><br />“包装仔细，锅具做工不错。”</span></li>");
						
						}
						$(".picb").append(op);
					}
					
					juddge = true;//创建完成后才可以继续生成新的商品

				}
						var height=$(".picb li").size()/3*462+"px";
						//console.log(height);
						$(".picb").css("height",height);
				
				
				//点击后图片跳转到详情页
						$(".picb li").click(function(){
								window.location.href = "detailsPage.html?name="+$(this).attr("data-name");
						})
							
				//main图片加长效果
						$(".picb li").mouseenter(function(){
							$(this).css({
								"border-color":"#fa531b",
								"z-index":"10"
							})
								.stop()
								.animate({"height":"487px"},500)
								.find("span").slideDown(500)
					
						})
						$(".picb li").mouseleave(function(){
							$(this).css({
								"border-color":""
							})
								.stop()
								.animate({"height":"437px"},500,function(){
									$(this).css("z-index","3")
								})
								.find("span").slideUp(500)
						})
							
								
				//		picb  li  定位
						for (var i=0;i<$(".picb li").size()/3;i++) {
				//			console.log($(".picb li").size())
							for (var j = 0;j<3;j++) {
								if(i==0){
									$(".picb li").eq(j).css({
										"top":0,
										"left":330*j+"px"
									})
								}else if(i>0){
									$(".picb li").eq(j+3*i).css({
										"top":459*i+"px",
										"left":330*j+"px"
									})
				
				//				}else if(i==2){
				//					$(".picb li").eq(j+6).css({
				//						"top":459*2+"px",
				//						"left":323*j+"px"
				//					})
								}
							}
						}
				
			}
		})
		//ajax结束
		}
		
	})
	
	
}
pro_list_all_pic();









	
/*//添加图片				
	$.ajax({
		type:"get",
		url:"json/list.json",
		async:true,
		success:function(picter){
			for(var i=0;i<picter.pic.length;i++){
				var op=$("<li data-name="+picter.pic[i].name+"><img src='"+picter.pic[i].src+"'/><span><b>会员评价：</b><br />“包装仔细，锅具做工不错。”</span></li>");
				$(".picb").prepend(op);
			}
		
		
		
		
			var height=$(".picb li").size()/3*462+"px";
			//console.log(height);
			$(".picb").css("height",height);
	
	
	//点击后图片跳转到详情页
			$(".picb li").click(function(){
					window.location.href = "detailsPage.html?name="+$(this).attr("data-name");
			})
				
	//main图片加长效果
			$(".picb li").mouseenter(function(){
				$(this).css({
					"border-color":"#fa531b",
					"z-index":"10"
				})
					.animate({"height":"487px"},500)
					.find("span").slideDown(500)
		
			})
			$(".picb li").mouseleave(function(){
				$(this).css({
					"border-color":""
				})
					.animate({"height":"437px"},500,function(){
						$(this).css("z-index","3")
					})
					.find("span").slideUp(500)
			})
				
					
	//		picb  li  定位
			for (var i=0;i<$(".picb li").size()/3;i++) {
	//			console.log($(".picb li").size())
				for (var j = 0;j<3;j++) {
					if(i==0){
						$(".picb li").eq(j).css({
							"top":0,
							"left":323*j+"px"
						})
					}else if(i>0){
						$(".picb li").eq(j+3*i).css({
							"top":459*i+"px",
							"left":323*j+"px"
						})
	
	//				}else if(i==2){
	//					$(".picb li").eq(j+6).css({
	//						"top":459*2+"px",
	//						"left":323*j+"px"
	//					})
					}
				}
			}
		
			
		}
	});*/

//用户登录
/*		var user = getCookie("username");//asdfasdf
//		console.log(user);
		
			//将得到的cookie字符串的3，，4,5位用*代替
			
			var lastCookie = user.replace(user.substr(3,4),"***");
			
			//将最后的lastCookie放到“你好！”后面
			
			$(".sj").find("span").html(lastCookie);	
	
		$(".dh").find(".out").click(function(){
			removeCookie("username");
		})*/
	
})
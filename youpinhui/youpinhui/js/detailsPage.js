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
//main固定框楼梯效果
	var boxHeight=$(".box1").offset().top;
	$(window).scroll(function(){
		var scrollHeight=$(document).scrollTop();		
		if(scrollHeight>=boxHeight){
			$(".box1").css({
				"position":"fixed",
				"top":0,
				"left":"149px"
			})
		}else{
			$(".box1").css({
				"position":"",
				"top":"",
				"left":0
			})
		}
	})	
	//控制楼层号
	var f=false;
	$(".box1 li").click(function(){
		f = true;//  改变开关的值  停止 滚动条的操作

		var $top = $(".qie").eq($(this).index()).offset().top;
		
		$(this).addClass("active")
		       .siblings().removeClass("active")		
		$("html,body").animate({			
			scrollTop:$top
		},1000,function(){
			f=false;  //点击之后   改变开关的值      继续可以执行   滚动条的操作
		})
	})
		

	//从首页或详情页传过来的图片	
		var url = window.location.href;
		var str=window.location.search;
		var Id=str.split("=");
		//console.log(Id)
		for (var i=0;i<url.length;i++) {
			if(url[i]=="?"){
				var type = url.split("?")[1].split("=")[0];
//				console.log(type) //id
				var picId = url.split("?")[1].split("=")[1];
//				console.log(picId) // 02 pic12
				if( type=="id" ){        //如果 type=="id" 数据是从首页传过来的
					$.ajax({
						type:"get",
						url:"json/index.json",
						async:true,
						success:function(msg){
							for (var i in msg) {
								var c = msg[i];
								for (var j=0;j<c.length;j++) {								
									if(c[j].id==picId){
										//原图
										$(".boxs2_ltp1 img").eq(0).attr("src",c[j].src);
										$(".boxs2_ltp1 img").eq(1).attr("src",c[j].imgs[1]);
										$(".boxs2_ltp1 img").eq(2).attr("src",c[j].imgs[2]);
										$(".boxs2_ltp1 img").eq(3).attr("src",c[j].imgs[3]);
										//放大后的
										$(".boxs2_ltp2 img").eq(0).attr("src",c[j].src);
										$(".boxs2_ltp2 img").eq(1).attr("src",c[j].imgs[1]);
										$(".boxs2_ltp2 img").eq(2).attr("src",c[j].imgs[2]);
										$(".boxs2_ltp2 img").eq(3).attr("src",c[j].imgs[3]);
										//小图
										$(".boxs2_lbt1 img").eq(0).attr("src",c[j].src);
										$(".boxs2_lbt1 img").eq(1).attr("src",c[j].imgs[1]);
										$(".boxs2_lbt1 img").eq(2).attr("src",c[j].imgs[2]);
										$(".boxs2_lbt1 img").eq(3).attr("src",c[j].imgs[3]);
										//商品价格
										$(".span1").html(c[j].price);
										//商品名称
										$(".boxs2_r").find("b").html(c[j].name);
										//商品信息
										$(".boxs2_r .sm").html(c[j].mais)
									}
								}
							}					
						}						 
					});					
				}else if( type=="name" ){				//如果 type=="name" 数据是从列表页传过来的		
					$.ajax({
						type:"get",
						url:"json/list.json",
						async:true,
						success:function(mag){
							//console.log(mag);
							for(var i in mag){
								var d=mag[i];
								for(var j=0;j<d.length;j++){	
									//console.log(d.length)
									if(d[j].name==picId){
//									console.log(picId);
										$(".boxs2_ltp1 img").eq(0).attr("src",d[j].src);
										$(".boxs2_ltp2 img").eq(0).attr("src",d[j].src);
										$(".boxs2_lbt1 img").eq(0).attr("src",d[j].src);
									}
								}
							}
							
						}
						
					});
				}else{		  		//专题页	
					$.ajax({
						type:"get",
						url:"json/special-1.json",
						async:true,
						success:function(mage){
							//console.log(mage);
							for(var i in mage){
								var e=mage[i];
								//console.log(e)
									if(e.special_top==picId){
										$(".boxs2_ltp1 img").eq(0).attr("src",e.src);
										$(".boxs2_ltp2 img").eq(0).attr("src",e.src);
										$(".boxs2_lbt1 img").eq(0).attr("src",e.src);
										$(".span1").html(e.sprice);
									}
							}
						}
					});
				}
				
			}
		}

//放大镜效果	
	$(".boxs2_ltp1").mouseenter(function(){
		$(".boxs2_ltp2").show();
		$(".drag").show();
		var maxTop = $(this).outerHeight()-$(".drag").outerHeight();
		var maxLeft = $(this).outerWidth()-$(".drag").outerWidth();
		$(document).mousemove(function(e){
			var e = e || event;
			var top = e.clientY-$(".boxs2_ltp1").offset().top-$(".drag").outerHeight()/2+$(window).scrollTop();
			var left = e.clientX-$(".boxs2_ltp1").offset().left-$(".drag").outerWidth()/2;
			var bili = -$(".bigImg").width()/$(".smallImg").width();
			if(top<0){
				top = 0;
			}else if(top>=maxTop){
				top = maxTop;
			}
			if(left<0){
				left = 0;
			}else if(left>=maxLeft){
				left = maxLeft;
			}
			$(".drag").css({
				"top":top+"px",
				"left":left+"px"
			})
			$(".bigImg").css({
				"top":bili*top+"px",
				"left":bili*left+"px"
			})
		})
	})
	$(".boxs2_ltp1").mouseleave(function(){
		$(".boxs2_ltp2").hide();
		$(".drag").hide();
	})
	//图片切换	
		$(".boxs2_lbt1").find("img").click(function(){
			$(this).css("border-color","red").siblings("img").css("border-color","");
			
			$(".smallImg").eq($(this).index()).css("display","block").siblings().css("display","");
			
			$(".bigImg").eq($(this).index()).css("display","block").siblings().css("display","")
		})
/*	//商品详细信息
	$.ajax({
		type:"get",
		url:"json/details.json",
		async:true,
		success:function(deta){
			console.log(deta);
			var html='';
			for(var i in deta){
				console.log(deta[i])
				html+='<p>"+deta[i].names+"</p><b>"+deta[i].name+"</b><p>"+deta[i].mais+" <p><div class="shop_sprice"><p class="p1">价格<span class="span1">"+deta[i].price+"</span></p><p class="p2">优惠<a class="span2">"+deta[i].by+"</a>订单金额满168元包邮</p></div>';
				
			}
			
			(".mainmasg").html(html)
		}
	});*/
//商品添加到购物车的效果	   
		   var offset = $(".shop_icon").offset(); //获取购物车位置
		// 	console.log(offset)
		 	 var a=0;
		  
		  $(".btn3").click(function(event){
				var scrTop = $(document).scrollTop();//获取滚动条的距离
		        var addcar = $(this); 
		        var img = addcar.parent().siblings().find('img').attr('src');//声明将要加入购物车的图片
		        var flyer = $('<img class="u-flyer" src="'+img+'">');
		//      var starTop = event.pageY + $(window).scrollTop();
				var starTop = event.pageY - scrTop;
		//      console.log(starTop);
		       flyer.fly({
		            start: { 
		                left: event.pageX, //开始位置（必填）#fly元素会被设置成position: fixed 
		                top: starTop //开始位置（必填） 
		            }, 
		            end: { 
		                left: offset.left, //结束位置（必填） 
		                top: offset.top, //结束位置（必填） 
		                width: 0, //结束时宽度 
		                height: 0 //结束时高度 
		            }, 
		            onEnd: function(){ //结束回调 
				//$("#msg").show().animate({width: '250px'}, 200).fadeOut(1000); //提示信息 
		                								//addcar.css("cursor","default").removeClass('btn3').unbind('click'); 
		                this.destory(); //移除dom 
		            } 
		       }); 						        
		//右侧购物车商品数量       
		        var startValue=$(".shop_amount").val();
				num= a + parseInt(startValue);
				a++;
				
				$(".numb").html(num);	
		//弹出提醒框
				$(".windows").css("display","block");
				$(".close").click(function(){
					$(".windows").css("display","");
				})
//、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、				
		//将商品信息保存到cookie中	
				var b = true;
				var shop_num=parseInt($(".shop_amount").val());
				//console.log(shop_num);
				if(localStorage.getItem("shop")){
					var shoparr = JSON.parse(localStorage.getItem("shop"));
					for (var i in shoparr) {
						console.log(shoparr[i].id)
						if(shoparr[i].id==Id[1]){
							var numa = parseInt(shoparr[i].num);
							numa += parseInt($(".shop_amount").val());
							shoparr[i].num = numa;
							b = false;
							break;
						}
					}
					if(b){
						var shopjson = {
							"id":Id[1],
							"num":shop_num
						}						
						shoparr.push(shopjson);
					}
				}else{
					var shoparr = [];	
					var shopjson = {
						"id":Id[1],
						"num":shop_num
					}
					shoparr.push(shopjson);
				}
				
				var shop = JSON.stringify(shoparr);
				localStorage.setItem("shop",shop);

							
		
//、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、	
	}) 
		                
		 			
	
	//商品数量添加、减少的范围
		var count=1;
		$(".btn1").click(function(){
			count--;
			if(count<1){
				count = 1;
				alert("商品不能少于一件");
			}
			$(".shop_amount").val(count);	
		})
		$(".btn2").click(function(){
			count++;
			if(count>20){
				count = 20;
				alert("最多只能购买20件");
			}
			$(".shop_amount").val(count);	
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









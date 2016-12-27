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
//密码验证
	$("#put1").focus(function(){
			$(this).css("outline-color","#5fc100");
			$("#etip1").hide();
	})
	$("#put1").blur(function(){
		var str1=$("#put1").val();
		if(str1 ==""){
			$("#etip1").show();
		}else if ( str1 != getCookie("password") ){
			alert("原密码不正确");
		}else{
			b=true;
		}

	})
	

//密码验证	
	$("#put2").focus(function(){
			$(this).css("outline-color","#5fc100");
	})
	$("#put2").blur(function(){
		var str2=$("#put2").val();
		var re2=/^[a-zA-Z0-9_-]{6,18}$/
		if(re2.test(str2)){
			b=true;
		}else{
			
			b=false;
		}
	})

//密码确认
	$("#put3").focus(function(){
			$(".li4").css("visibility","hidden");	
			$(this).css("outline-color","#5fc100");
	})
	$("#put3").blur(function(){
			var str3=$("#put3").val();
			var re3=/^[a-zA-Z0-9_-]{6,18}$/
			if(re3.test(str3)&&str3==$("#put2").val()){
				$("#etip2").hide();
				c=true;
			}else if($(this).val()==""){
				$("#etip2").show();
			}else{
				c=false;
			}
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
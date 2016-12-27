$(function(){
	
//手机，电视切换
		$(".zhce div").click(function(){
			$(this).addClass("show").siblings().removeClass("show");
			
			$(".bigbox .boxx").eq($(this).index()).css("display","block").siblings().css("display","none");
		})
		

//手机号验证
	var a=false;
	var b=false;
	var c=false;
	var d=false;
	var e=false;
	
	$(".shj").focus(function(){
			$(".li1").css("visibility","hidden");	
			$(this).css("outline-color","#5fc100");
	})
	$(".shj").blur(function(){
		var str=$(".shj").val();
		var re=/^((13\d)|(14\d)|(15\d)|(18\d)|(17\d))(\d{8})$/;
		if(re.test(str)){
			$(".li1").css("visibility","hidden");	
			a=true;
		}else if($(this).val()==""){	
			$(".li1").css("visibility","visible");
		}else{
			alert("手机号格式不正确");
			a=false;
		}
	
	})
//密码验证	
	$(".szmima").focus(function(){
			$(".li3").css("visibility","hidden");	
			$(this).css("outline-color","#5fc100");
	})
	$(".szmima").blur(function(){
		var str2=$(".szmima").val();
		var re2=/^[a-zA-Z0-9_-]{6,18}$/
		if(re2.test(str2)){
			$(".li3").css("visibility","hidden");
			b=true;
		}else if($(this).val()==""){
			$(".li3").css("visibility","visible");
		}else{
			alert("密码格式不正确");
			b=false;
		}
	})

//密码确认
	$(".qrmima").focus(function(){
			$(".li4").css("visibility","hidden");	
			$(this).css("outline-color","#5fc100");
	})
	$(".qrmima").blur(function(){
			var str3=$(".qrmima").val();
			var re3=/^[a-zA-Z0-9_-]{6,18}$/
			if(re3.test(str3)&&str3==$(".szmima").val()){
				$(".li4").css("visibility","hidden");
				c=true;
			}else if($(this).val()==""){
				$(".li4").css("visibility","visible");
			}else{
				alert("密码不一致");
				c=false;
			}
		})
////验证码的获取
	function Rand(min,max){
		return Math.floor(Math.random()*(max-min+1)+min);
	}
	var arr=[];
//随机生成四位数字字母组合验证码
	function suijiyanzheng(){
		for(var i=0;i<4;i++){
			var num = Rand(0,2);
			if(num==0){
				arr.push(Rand(0,9));
			}else if(num==1){
				arr.push(String.fromCharCode(Rand(65,90)));
			}else if(num==2){
				arr.push(String.fromCharCode(Rand(97,122)));
			}		
		}
	return arr.join(",").replace(",","").replace(",","").replace(",","");
	}

//随机生成四位数字
	function authCode(m){
		var str=[];
		for(var n=0;n<m;n++){
			var num=parseInt(Math.random()*123);
				if(num>=0&&num<=9){
					str.push(num);
				}else{
					n--;
				}
		}
		return str.join("");
	}
//定义变量作用域
	var yanzehgn=suijiyanzheng();
	var duxinyz=authCode(4);
//验证码
			
	//点击切换验证码
	$(".dl2 dd").find("a").click(function(){
		arr=[];
		$(".yzm").html(yanzehgn);
	})	
	$(".shyz").focus(function(){
		$(this).css("outline-color","#5fc100");
	})
	/*$(".shyz").blur(function(){
		if($(".shyz").val() == ""){
			alert("请输入验证码");
		}else if($(".shyz").val() != yanzehgn ){
			alert("验证码不正确");
		}
	})*/
		

//短信验证	
	$(".dxyz").focus(function(){
		$(".li5").css("visibility","hidden");
		$(".btn1").css("color","#222222");
		$(this).css("outline-color","#5fc100");
	})
	$(".dxyz").blur(function(){
		//点击获取验证码
		$(".btn1").click(function(){
			arr=[];					
			$(".dxm").html(duxinyz);
			$(this).css("outline-color","#5fc100");
		})
		//判断验证码是否正确
		if($(this).val()==""){
			$(".li5").css("visibility","visible");
			d=false;
		}else if( $(".dxyz").val() != duxinyz ){
			alert("验证码不正确");
		}else{
			$(".li5").css("visibility","hidden");
			d=true;
		}
	})



//用户协议（判断是否符合登录条件）
		$(".sbt").click(function(){
			
			if($(".chose").is(":checked")){
				$(".li6").css("visibility","hidden");
				e=true;
			}else{
				$(".li6").css("visibility","visible");
				e=false;
			}
			if(a&&b&&c&&d&&e){
				setCookie("username",$(".shj").val());			//用户名存储
				setCookie("password",$(".qrmima").val());		//密码存储
//				$(".sbt").attr("href","login.html");
				window.location.href = "login.html";
				$(".boxr li").css("visibility","hidden");
			}else{
				$(".boxr li").not(".li6").css("visibility","visible");
			}
		})

		

//电视用户激活
		//手机号验证
		var A=false,
			B=false,
			C=false,
			D=false,
			E=false;
		
		var dsre=/^((13\d)|(14\d)|(15\d)|(18\d)|(17\d))(\d{8})$/;
		$(".dssj").focus(function(){
			$(".dsli1").css("visibility","hidden");
			$(this).css("outline-color","#5fc100");
		})
		$(".dssj").blur(function(){
			if($(".dssj").val()=="" ){
				$(".dsli1").css("visibility","visible");
				A=false;
			}else if(dsre.test($(".dssj").val())==false){
				alert("输入的手机号格式不正确");
				A=false;
			}else{
				A=true;
			}
		})
		//密码验证
		var dsre2=/^[a-zA-Z0-9_-]{6,18}$/
		$(".dssz").focus(function(){
			$(".dsli4").css("visibility","hidden");
			$(this).css("outline-color","#5fc100");
		})
		$(".dssz").blur(function(){
			if($(".dssz").val()=="" ){
				$(".dsli4").css("visibility","visible");
				B=false;
			}else if(dsre2.test($(".dssz").val())==false){
				alert("密码格式不正确");
				B=false;
			}else{
				B=true;
			}
		})
		//密码确认
		var dsre3=/^[a-zA-Z0-9_-]{6,18}$/
		$(".dsqr").focus(function(){
			$(".dsli5").css("visibility","hidden");
			$(this).css("outline-color","#5fc100");
		})
		$(".dsqr").blur(function(){
			if($(".dsqr").val()== "" ){			
				$(".dsli5").css("visibility","visible");
				C=false;
			}else if(dsre3.test( $(".dsqr").val())== false){
				alert("密码格式不正确");
				C=false;
			}else if($(".dsqr").val() != $(".dssz").val()){
				alert("两次密码不一致");
				C=false;
			}else{
				C=true;
			}
		})
//验证码			
	//点击切换验证码
	$(".dsdl2 dd").find("a").click(function(){
		arr=[];
		$(".dsyzm").html(yanzehgn);
	})	
	$(".dsyz").focus(function(){
		$(this).css("outline-color","#5fc100");
	})
/*	$(".dsyz").blur(function(){
		if($(".dsyz").val() == ""){
			alert("请输入验证码");
		}else if($(".dsyz").val() != yanzehgn ){
			alert("验证码不正确")
		}
	})*/
//短信验证	
	$(".dsdx").focus(function(){
		$(".dsli3").css("visibility","hidden");
		$(".dsbtn1").css("color","#222222");
		$(this).css("outline-color","#5fc100");
	})
	$(".dsdx").blur(function(){
		//点击获取验证码
		$(".dsbtn1").click(function(){
			arr=[];					
			$(".dsdxm").html(duxinyz);
		})
		//判断验证码是否正确
		if($(this).val()==""){
			$(".dsli3").css("visibility","visible");
			D=false;
		}else if( $(".dsdx").val() != duxinyz ){
			alert("验证码不正确");
		}else{
			$(".dsli3").css("visibility","hidden");
			D=true;
		}
	})
		
//提交	
		$(".dsboxs .btn").click(function(){
			if($(".dschose").is(":checked")){
				$(".dsli6").css("visibility","hidden");
				E=true;
			}else{
				$(".dsli6").css("visibility","visible");
				E=false;
			}
			if(A&&B&&C&&D&&E){
				setCookie("username",$(".dssj").val());			//用户名存储
				setCookie("password",$(".dssz").val());		//密码存储
				window.location.href = "login.html";
				$(".dsboxr li").css("visibility","hidden");
			}else{
				$(".dsboxr li").not(".dsli6").css("visibility","visible");
			}
			
		})

//cookie保存数据
//localStorage.setItem("user","12345678");
//localStorage.getItem("user")
//localStorage.removeItem("user")


})


$(function(){

//手机号验证
	var a=false;
	var b=false;
	$(".put1").focus(function(){
		$(this).css("outline-color","#5fc100");
		$(".sp1").hide();
			
	})
	$(".put1").blur(function(){
		var str=$(".put1").val();
		var re=/^((13\d)|(14\d)|(15\d)|(18\d)|(17\d))(\d{8})$/;
		if(str==""){
			$(".sp1").show();
		}else if(!re.test(str)){							
			alert("手机号格式不正确");
		}else if( getCookie("username") != str ){	//判断cookies是否存在
			alert("该账户未注册，请先注册");
			window.location.href = "registered.html";
		}else{
			a=true;
		}
		
	})

//密码验证
	$(".put2").focus(function(){
			$(this).css("outline-color","#5fc100");
			$(".sp2").hide();
	})
	$(".put2").blur(function(){
		var str2=$(".put2").val();
		var re2=/^[a-zA-Z0-9_-]{6,18}$/
		if(str2 ==""){
			$(".sp2").show();
		}else if(!re2.test(str2) ){
			alert("密码格式不正确");			
		}else if ( str2 != getCookie("password") ){
			alert("密码不正确");
		}else{
			b=true;
		}

	})


    //如果两个条件都满足，就能成功跳转到首页		
	$("#login").click(function(){
		
		if(a==true && b==true){
			window.location.href="index.html";
		}
				
	})
 

    
 


})

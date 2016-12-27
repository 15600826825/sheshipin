
//随机函数
function Rand(min,max){
	return Math.floor(Math.random()*(max-min+1))+min;
}

//随机生成四位验证码
var arr = [];
function yanzhengma(){	
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
var suiji = yanzhengma();
var telYZ = yanzhengma();


$(".test").html(suiji).css("font-size","16px").click(function(){
	arr = [];
	suiji = yanzhengma();
	$(this).html(suiji);
});
$("#getTel").click(function(){
	arr = [];
	telYZ = yanzhengma();
	alert("手机验证码为"+telYZ);
})


//表单验证
var re = /^\w{6,16}$/;
$("#btn").click(function(){
	var a = false;
	var b = false;
	var c = false;
	var d = false;
	if(re.test($("#pwd").val())){
		a = true;
	}else{
		alert("密码输入不规范");
		a = false;
	}
	if($("#yanzheng").val()==$(".test").html()){
		b = true;
	}else{
		alert("验证码输入不正确");
		b = false;
	}
	if($("#telTxt").val()==telYZ){
		c = true;
	}else{
		alert("手机验证码输入不正确");
		c = false;
	}
	if($("#aut").is(":checked")){
		d = true;
	}else{
		alert("请同意用户协议");
		d = false;
	}
	if(a&&b&&c&&d){
//		将账号密码保存到cookie中
		var str_d = "";
		var arr = [];
		var d = {
					"user":$("#txt").val(),
					"pwd":$("#pwd").val()
			};			
		aa=getCookie("userpwd")
		arr=aa;	
		arr.push(d);
		str_d = JSON.stringify(arr)
		setCookie("userpwd",str_d)
		window.location.href = "../index.html?user="+encodeURI($("#txt").val());
	}
})


//遮罩层
$("#xieyi a").click(function(){
	$("#shade").fadeIn(500);
})
$("#shade b").click(function(){
	$("#shade").fadeOut(500);
})















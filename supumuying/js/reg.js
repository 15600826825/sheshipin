//验证
var suo = false;
$(".test span").mousedown(function(e){
	var e = e || event;
	var rex = e.clientX;
	$(document).mousemove(function(ev){
		var left = $(".test span").position().left;
		var ev = ev || event;
		$(".test span").css({
			"left":ev.clientX - rex + "px"
		})
		if(left<1){
			$(".test span").css("left","3px");
			$(document).unbind("mousemove");
		}else if(left>235){
			$(".test").html("<span id='testSpan'>√</span>验证通过")
						.css("background","#a6e69a");
			suo = true;
			$(".test span").css("left","235px");
			$(document).unbind("mousemove");
			$(document).unbind("mousedown");
			$(document).unbind("mouseup");
		}
		return false;
	})
	return false;
})

$(".test span").mouseup(function(){
	$(document).unbind("mousemove");
	var Left = $(".test span").position().left;
	if(Left != 233){
		$("#testSpan").animate({
			"left":3
		})
	}
})


$("#btn").click(function(){
	var b = false,
		  c = false;
	if(suo){
		$.ajax({
			type:"get",
			url:"login.html",
			async:true,
			success:function(msg){
				a = document.cookie.split("=");				
				if(a[0]=="userpwd"){
					a = getCookie("userpwd")		
					for(var i=0;i<a.length;i++){
						if($("#txt").val()==a[i].user){
							if($("#pwd").val()==a[i].pwd){
								window.location.href = "../index.html?user="+encodeURI($("#txt").val());
								break;
							}else{
								c = true;
							}
						}else{
							b = true;
							c = false;
						}
					}
				}else{
					b = true;
				}
				if(c){
					alert("密码输入不正确")
				}
				if(b){
					alert("用户名不正确")
				}
			}
		});
	}else{
		alert("请通过验证")
	}
	
})







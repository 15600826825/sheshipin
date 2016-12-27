$(function(){
		
//商品减加减计算、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、

function pro_num(){
	
	//点击按钮实现要购买商品数量的加减，最少为1
	
	$("body").on("click",".adds",function(){
			
	//点击时获取+ - 中间的input值
			
			var count=$(this).siblings("input").val();
			
			//console.log(count)

			
	//定义一个变量，当点击时获取当前的商品总数，当点击“+”时，商品总数++；
			
			var nowNum = $(".c_piece").find("i").html();
			
//			console.log(nowNum)//测试通过，可以获的商品总数
			
	//获取单价
			
			var danjia = $(this).parent().siblings(".c_price").find("i").html();
			
//			console.log(danjia);//获取单价成功
	
		
	//将价格总的数字提取出来
	
			var allProductPrice = $(".c_paid").find("i").html(); 
//			console.log(allProductPrice);
			var allProductPriceNum = allProductPrice.substring(allProductPrice.indexOf("￥")+1);
			
			//console.log(allProductPriceNum);//获取成功
		
			count++;
			
			nowNum++;//商品总数++
			
			//console.log(count);
			
			$(this).siblings("input").val(count);
			
			//console.log($(this).siblings("input"));//点击事件成功
			
			//将++后的总数放回原来的位置
			
			$(".c_piece").find("i").html(nowNum);

			//++后小计的值
			
			$(this).parent().siblings(".c_sum").find("i").html(count*danjia);
			
			//++后总值，每次点击“-”，总价减一次当前商品的单价
			$(".fs_14").html( (Number(allProductPriceNum) + Number(danjia)));
			$(".c_paid").find("i").html( (Number(allProductPriceNum) + Number(danjia))); 
			
	})
	
	$("body").on("click",".reduce",function(){
		
	//点击时获取+ - 中间的input值
		
		var count=$(this).siblings("input").val();
		
	//定义一个变量，当点击时获取当前的商品总数，当点击“-”时，商品总数--；
			
		var nowNum = $(".c_piece").find("i").html();
		
	//获取单价
			
		var danjia = $(this).parent().siblings(".c_price").find("i").html();
		
	//将价格总的数字提取出来
	
		var allProductPrice = $(".c_paid").find("i").html();  
		
		var allProductPriceNum = allProductPrice.substring(allProductPrice.indexOf("￥")+1);
		
		//console.log(allProductPriceNum);//获取成功
		
		//判断是否大于1
		//console.log(count);
		
		if(count>1){
			
			nowNum--;//商品总数--
			
			count--;
			
			//--后总值，每次点击“-”，总价减一次当前商品的单价
			$(".fs_14").html( (Number(allProductPriceNum) - Number(danjia)));
			$(".c_paid").find("i").html( (Number(allProductPriceNum) - Number(danjia))); 
						
		}else if(count==1){
			alert("商品最少为一件")			
		}
		$(this).siblings("input").val(count);
		
		//将--后的总数放回原来的位置
			
		$(".c_piece").find("i").html(nowNum);
		
		//--后小计的值
			
		$(this).parent().siblings(".c_sum").find("i").html(count*danjia);				

	})

}
pro_num();

//动态生成购物车中的商品、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、
function sc_msg(){
	$.ajax({
		type:"get",
		url:"json/index.json",
		async:true,
		success:function(data){			
			var html="";
			var b = false;
			if(localStorage.getItem("shop")){
				var shoparr = JSON.parse(localStorage.getItem("shop"));
				//console.log(shoparr);
				var sc_num = 0;
				var countNum =0;
				var allProduct = 0;
				b = true;
				$(".box").hide();
			}else{
				$(".box").show();
			}
			for(var i in data){		
				//console.log(data[i])
				for(var j=0;j<data[i].length;j++){
					var a=data[i][j];
//					console.log(a.id);
					if(b){
						for (var k = 0;k<shoparr.length;k++) {														
							if(a.id==shoparr[k].id){
								countNum += shoparr[k].num;
								//console.log(countNum)
								allProduct += shoparr[k].num*a.price;
								//console.log(allProduct);
								
								html+='<div class="cart_form"><div class="shop"><div class="c_meg"><dl><dt><img src="'+a.src+'"/></dt><dd><p class="m_tit"><a href="#">'+a.name+'</a></p></dd></dl></div><div class="c_price"><p class="c_price_num">¥<i>'+a.price+'</i></p></div><div class="c_content"><a href="#" class="reduce">-</a><input value="'+shoparr[k].num+'" type="text" /><a href="###" class="adds">+</a></div><div class="c_sum"><p>¥<i>'+shoparr[k].num*a.price+'</i></p></div><div class="c_action"><i class="i_del" data-role="del" del="'+shoparr[k].id+'">删除</i></div><div class="c_check"><input checked="checked" type="checkbox" class="aaa" /></div></div></div>';
							}
						}
					}
					
						
				}			
			}
			
			$(".divv").html(html);
			//商品总件数和商品总金额
			$(".c_rt").find(".fs_14").html(allProduct)
			$(".c_piece").find("i").html(countNum);
			$(".c_paid").find("i").html(allProduct);
			//全选
			$("#qx").click(function(){
				if($("#qx").prop("checked")){
					$(".aaa").prop("checked",true);
				}else{
					$(".aaa").prop("checked",false);
				}				
			})
			comeBack_index();
		}
	});
}
	sc_msg();//打开页面时自动生成商品放入到购物车

//清空购物车，当点击“删除”时，将所有cookie删除 、、、、、、、、、、、、、、、、、、、、、、、、、、、、
	
	$("body").on("click",".b_del",function(){
		
		//console.log(1);//点击事件获取成功
		
		localStorage.removeItem("shop");
		
		$(".divv").html("");
		
		$(".c_piece").find("i").html("0.0");
		
		$(".c_paid").find("i").html("0.0");

	})
	
	//删除一件商品
	
	$("body").on("click",".i_del",function(){
		
		//将数据转换为对象
		var localshop = JSON.parse(localStorage.getItem("shop"));
		
		//console.log(localshop);//转换成功
		
		//利用each，遍历找到数据中当前商品的对象项
		
		var _this  =  this;
	
		$.each(localshop,function(index,value){

			if($(_this).attr("del") ==value.id){//如果当前点击的对象的del值和存入的shop值相同，则删除当前项
			
				localshop.splice(index,1);//利用splice将当前项删除
				
				return false;			  //终止$.each循环,否则会报错
			}
			
		})
		
		//将得到的对象转换成字符串
		
		var str = JSON.stringify(localshop);
		
		//console.log(str);
		
		//将转换为字符串的str存入local
		
		localStorage.setItem("shop",str);
		
		//点击时，将html中的商品同时删除
		
		$(this).parents(".cart_form").html("");
		
		//商品总数和价格变化
		
		var changeNum = $(".c_piece").find("i").html() - $(".c_content").find("input").val();
		
		//console.log(changeNum);//结果正确
		
		$(".c_piece").find("i").html(changeNum);
		
		var changePrice = $(".c_paid").find("i").html();
		//console.log(changePrice)
		//将字符￥后面的数字取出来
		
		var sub_changePrice = changePrice - $(this).parent().prev().find("i").html();
		
		//console.log(sub_changePrice);//测试通过
		
		$(".c_paid").find("i").html(sub_changePrice);
		$(".fs_14").html(sub_changePrice);
	})





//判断购物车有没有商品，如果有则显示商品，如果没有，则显示返回首页的界面、、、、、、、、、、、、、、、、、、、、、、、、、、
	function comeBack_index(){
		
		//如果allproduct中没有内容，则为没有商品
		
		if($(".divv").html() == ""){
			
			$(".car_box").css("display","none");
			
			$(".box").css("display","block");
			
		}else{
			
			$(".car_box").css("display","block");
			
			$(".box").css("display","none");
		}

	}
	


//用户登录判断
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

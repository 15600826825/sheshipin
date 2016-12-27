//随机函数
function Rand(min,max){
	return Math.floor((max-min+1)*Math.random())+min;
}
var endDay = Rand(1,6)
//倒计时
setInterval(function(){
	var now = new Date(); //当前时间
		var nowDate = now.getDate();
		var nowHours = now.getHours();
		var fau = new Date();
		fau.setDate(now.getDate()+endDay);
		fau.setHours(00);
		fau.setMinutes(0);
		fau.setSeconds(0);
		var seconds = 1000; 
		var minutes = seconds*60; //60000
		var hours = minutes*60; //3600000
		var days = hours*24; //86400000			
		var cha = fau - now;
		//d 天数
		var d = cha/days;			
		//h 小时
		var h = cha%days/hours; 			
		//分钟
		var m = cha%days%hours/minutes;	
		//秒
		var s = cha%days%hours%minutes/seconds;
		
		var Zd = String(parseInt(d));
		var Zh = String(parseInt(h));
		var Zm = String(parseInt(m));
		var Zs = String(parseInt(s));
		if(Zh.length<2){
			Zh = "0" + Zh;
		}
		if(Zm.length<2){
			Zm = "0" + Zm;
		}
		if(Zs.length<2){
			Zs = "0" + Zs;
		}
		
		$(".timer span").eq(0).html(Zd);
		$(".timer span").eq(1).html(Zh);
		$(".timer span").eq(2).html(Zm);
		$(".timer span").eq(3).html(Zs);
},100)



//dl
$(".main_b dl").mouseenter(function(){
	$(this).find(".addShop").css({
		"background":"#e5004b",
		"color":"#fff"
	})
})
$(".main_b dl").mouseleave(function(){
	$(this).find(".addShop").css({
		"background":"",
		"color":""
	})
})





//购物数量
var goNum = 2;
$(".jia").click(function(){
	goNum++;
	if(goNum<2){
		goNum = 2;
	}else if(goNum>99){
		goNum = 99;
	}
	$(".text").val(goNum);
})
$(".jian").click(function(){
	goNum--;
	if(goNum<2){
		goNum = 2;
	}else if(goNum>99){
		goNum = 99;
	}
	$(".text").val(goNum);
})
var reNum = /^\d+$/;
$(".text").focus(function(){
	that = $(this);
	$(document).keyup(function(){
		var reLeng = that.val().length;
		if(reNum.test(that.val())){
			var shopNum = parseInt(that.val());
			goNum = shopNum;
			if(shopNum>2){

			}else{
				that.val(2);
			}
		}else{
			that.val(2);
		}
		if(shopNum<2){
			that.val(2);
		}else if(shopNum>99){
			that.val(99);
		}
	})
})





//后台添加图片
$.ajax({
	type:"get",
	url:"../data/shop.json",
	async:true,
	success:function(glist){
		for (var i=0;i<glist.list.length;i++) {
			var oa = $("<a href=deta.html?"+glist.list[i].id+"><img src='../img/"+glist.list[i].src+".jpg' class='Shop' /><span style='display:none' data-id="+glist.list[i].id+"></span><img src='../img/list/worldGo.png' class='worldGo' /><img src='../img/list/toShow.png' class='toShow'' /></a>")
			$(".main_b dt").eq(i).prepend(oa);
		}
	}
});





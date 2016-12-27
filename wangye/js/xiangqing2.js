$(function(){
	url = location.href;
	url = url.split("?")[1];
	id = url.split("&")[0].split("=")[1];
	cname = url.split("&")[1].split("=")[1];
	$.ajax({
		type:"get",
		url:"data.json",
		async:true,
		success:function(glist){
			shopInfo = glist.list[cname];
			var html = "";
			html = '<li class="smallImg" style="display:block"><img src="../img/'+shopInfo.src2+'"/><div class="drag"></div></li>'+
					'<li class="bigCursor"><img src="../img/'+shopInfo.src2+'"/></li>'
			$(".mirror").html(html);
			$objsmallImg = $(".main1lt .mirror .smallImg");//小图
			$objsmallCursor = $(".main1lt .mirror .smallImg .drag");//小图可视区
			$objbigImg = $(".bigCursor img")//大图
			$objbigCursor = $(".bigCursor")//大图可视区
			$objsmallImg.mousemove(function(e){
				//console.log($objsmallImg.offset().top);
				scrollTop = document.documentElement.scrollTop||document.body.scrollTop;
				ev = e||window.event;
				j = $(this).index();
				$objsmallCursor.eq(j).show();
				$objbigCursor.eq(j).show().animate({
					"width":482,
					"height":482,
					"left":490,
					"top":0
				},500)
				$objsmallCursor.outerWidth($objsmallImg.outerWidth() / $objbigImg.outerWidth() * $objbigCursor.outerWidth());
				$objsmallCursor.outerHeight($objsmallImg.outerHeight() / $objbigImg.outerHeight() * $objbigCursor.outerHeight());
				scale = $objbigCursor.outerWidth()/$objsmallCursor.outerWidth();
				left = ev.clientX - $objsmallImg.offset().left - $objsmallCursor.outerWidth()/2;
				height = ev.clientY - $objsmallImg.offset().top - $objsmallCursor.outerHeight()/2 + scrollTop;
				maxL = $objsmallImg.outerWidth()-$objsmallCursor.outerWidth();
				maxT = $objsmallImg.outerHeight()-$objsmallCursor.outerHeight();
				if(left<=0){
					left = 0;
				}else if(left>=maxL){
					left = maxL;
				}
				if(height<=0){
					height=0;
				}else if(height>=maxT){
					height=maxT;
				}
				$objsmallCursor.eq(j).css({
					"top":height,
					"left":left
				})
				$objbigImg.eq(j).css({
					"top":-height*scale,
					"left":-left*scale
				})
			})
			//放大镜鼠标离开时
			$objsmallImg.mouseleave(function(){
				m = $(this).index();
				$objsmallCursor.eq(m).hide();
				$objbigCursor.eq(m).hide().stop().animate({"width":80,"height":80,"left":200,"top":200});
			})
			$(".main1r .p11 .a2").click(function(){
				var arr = [];
				var flag = true;
				var d = {
						"id":shopInfo.id,
						"name":shopInfo.name,
						"src1":shopInfo.src1,
						"src2":shopInfo.src2,
						"price":shopInfo.price,
						"count":1
					}
				
				arr = getCookie("cartlist");
				//console.log(arr);
				for (var j=0;j<arr.length ;j++) {
							//如果cookie中的商品编号 和 当前点击的商品编号相等
							if (arr[j].id == d.id) {
								arr[j].count++;
								flag = false;//禁止向数组中添加新商品
								break;
							}
						}
				
				if (flag) {
						arr.push(d);
					}
				str_d = JSON.stringify(arr);
				document.cookie = "cartlist=" + str_d; 
				//console.log(document.cookie);
						
			})
			$(".main1r .p11 .a1").click(function(){
				var r = window.confirm("确认要购买吗？");
				if(r){
					location.href = "gouwuche.html";
				}
			})
		}//success
	
	});//ajax
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
})//引入

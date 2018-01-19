$(function(){

	$(".add").click(function(e){
		$(this).siblings("input").attr("value",parseInt($(this).siblings("input").val())+1);
		prise(this);
		e.preventDefault();
		setTotal();
		cc++;
	});

	$(".minus").click(function(e){
		if($(this).siblings("input").val()<2){
			$('.minus').attr('disabled',"true");
			$('.minus').addClass("inputColor");
		}else{
			$('.minus').removeAttr("disabled"); 
			$(this).siblings("input").attr("value",parseInt($(this).siblings("input").val())-1);
			prise(this);
			e.preventDefault();
			setTotal();
			cc--;
		}
	});

	$(".queue5 input").blur(function(e){
		Blur(this);
		$(this).val(parseInt($(this).val()));
		priseBlur();
		e.preventDefault();
		setTotal();
	});

	$(".queue5 input").keydown(function(e){
		//var keynum = (event.keyCode ? event.keyCode : event.which); 
		var keynum = (event.keyCode ? event.keyCode : event.which); 
		if(keynum == '13'){
			//alert("ok");
			Blur(this);
			$(this).val(parseInt($(this).val()));
			priseBlur();
			e.preventDefault();
			setTotal();
			
		}
	});

	priseBlur();
	function priseBlur(){
		var i=0;
		for(i>0; i<$(".queue4 div span").size();i++){
			prise($(".minus").eq(i));
		}
	}
	//小计
	function prise(a){
		//var qq=$(".queue4 span").html();
		var qq=$(a).parents(".queue5").siblings(".queue4").children().children("span").html();
		var ww=parseFloat($(a).siblings("input").val());
		//console.log("qian:"+qq);
		//console.log("shuliang:"+ww);
		var ee=parseFloat(qq*ww);
		//console.log("qq*ww:"+ee);
		var eee=ee.toFixed(2);
		$(a).parents(".queue5").siblings(".queue6").children("span").html(eee);
	}
	var cc=1;

	function Blur(a){
		
		var ret=/^[1-9]\d*$/;
		if($(a).val()<1){
			$(a).val(cc);
		}else if(ret.test($(a).val())){
			//console.log("yes!");
			cc=$(a).val();
		}else{
			/*var b=$(a).val($(a).val().replace(/0-9*$/g,""));
			console.log("no!");*/
			$(a).val(cc);
			//console.log(cc);
		}
	}

	$(".queue7 a").click(function(){
		$(this).parents("tbody tr").remove();
	});

	/*全选和全选取消*/
	$("thead .queue1 input").click(function(event){
		if($("thead .queue1 input[type='checkbox']").prop('checked')){
			$("tbody .queue1 input").prop('checked',true);
			$(this).parents("thead").siblings("tbody").children().children().addClass("status");
			setTotal();
			//console.log($(".jieSuanNum b").html());
		}else{
			$("tbody .queue1 input").prop('checked',false);
			$(this).parents("thead").siblings("tbody").children().children().removeClass("status");
			setTotal();
			//event.preventDefault();
		}
	});

	/*初始化数量与总价*/
	$(".jieSuanNum b").html("0");
	$(".jieSuanSum b").html("0.00");

	/*实现选中删除功能*/
	$(".jieSuan a.delShop").click(function(){
		$("tbody input").each(function(){
			if($(this).prop('checked')){
				//console.log("111");
				//console.log($(this));
				$(this).parents("tr").remove();
			}
		});
	});

	//计算总价 总数
	
	function setTotal() {
		var total = 0;
		var totalPrice = 0;
		//$('.check').each(function() {
		//if($(this).hasClass("status")) {
		$(".status input.xSum").each(function() {
			total += parseInt($(this).val());
		});
		$(".status span.priseY").each(function() {
			totalPrice += parseFloat($(this).text());
		});
		var totalPrices=totalPrice.toFixed(2);
		$(".jieSuanNum b").text(total);
		$(".jieSuanSum b").text(totalPrices);
		//}
		//});
	}
	
	//单选
	$(".queue1 input").click(function(){
		jianBtn();
		$(this).each(function(){
			if($(this).prop("checked")==true){
				$(this).parent().siblings().addClass("status");//添加类名
				//console.log("1");
				setTotal();
				//判断tbody选项是否都为选对状态 是则使thead被选中
				if($("tbody tr .queue1 input").length==$("tbody tr .queue1 input:checked").length){
					$("thead .queue1 input").prop('checked',true);
					$(this).parent().siblings().addClass("status");
					console.log("=");
					setTotal();
				}
			}else if($(this).length!=$(this).prop("checked").length){
				$("thead .queue1 input").prop('checked',false);
				$(this).parent().siblings().removeClass("status");
				setTotal();
			}else{
				$(this).parent().siblings().removeClass("status");//取消类名
				setTotal();
			} 
		}); 
		//console.log("一共长："+$("tbody tr .queue1 input").length);
		//console.log("被选中的长："+$("tbody tr .queue1 input:checked").length);
	});

	//检测按钮是否可按
	var bClock=false;
	jianBtn();
	function jianBtn(){
		if($("tbody tr .queue1 input:checked").length<1){
			$(".pay").addClass("disab");
		}else{
			$(".pay").removeClass("disab");
		}
	}
});
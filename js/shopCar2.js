$(function() {

$(".add").click(function(e) {
	var quantity = parseInt($(this).siblings("input").text());
	$(this).prev().text(quantity + 1);
	//计算每件商品总价
	var price = parseInt($(this).parents("li").prev().find(".price").text());
	var num = parseInt($(this).prev().text());
	$(this).parents('li').next().find('.total').text((price * num).toFixed(2));
	e.preventDefault()
	setTotal();
});

//减的计算
$(".minus").click(function(e) {
	var quantity = parseInt($(this).next().text());

	if(quantity > 1) {
		$(this).next().text(quantity - 1);
	};

	var price = parseInt($(this).parents("li").prev().find(".price").text());
	var num = parseInt($(this).next().text());
	//小计
	$(this).parents('li').next().find('.total').text((price * num).toFixed(2));
	e.preventDefault()
	setTotal();
});
//计算总价
function setTotal() {
	var total = 0;
	var totalPrice = 0;
	//$('.check').each(function() {
	//if($(this).hasClass("status")) {
	$(".status .num").each(function() {
		total += parseInt($(this).text());
	});
	$(".status .total").each(function() {
		totalPrice += parseInt($(this).text());
	});

	$("#allNum").text(total);
	$("#all").text(totalPrice);
//}
//});

}

//全选
$('.checkAll').click(function(){
	if($('.checkAll').prop("checked")==true){
		$('.check').prop("checked",true);
		$('.check').parent().addClass("status");
		setTotal();
	}else{
		$('.check').prop("checked",false);
		$('.check').parent().removeClass("status");
		setTotal();
	}
});
// 单选
$(".check").click( function(){
	$(this).each(function(){
		if($(this).prop("checked")==true){
			$(this).parent().addClass("status");//添加勾选样式
			setTotal();
		}else{
			$(this).parent().removeClass("status");//取消勾选样式
			setTotal();
		} 
	}); 
});
});
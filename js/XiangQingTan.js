/*详情页的二维码弹出层*/
$(function(){
	var oHeight=$(window).height();
	$("#tcErWeiMa").height(oHeight);
	$(".shouJiGou").click(function(){
		$("#tcErWeiMa").show();
		$(".palette").show();
	});
	$(".close").click(function(){
		$("#tcErWeiMa").hide();
		$(".palette").hide();
	});
});

























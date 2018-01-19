$(function(){
	$("#main .shopWindow dl dd").click(function(){
		$(this).addClass("one").siblings().removeClass();
		var CC=$(this).children("a").children("img").attr("src");
		$("dt").children("img").attr("src",CC);
	});
	$(window).scroll(function(){
		var Qheight=$(document).scrollTop(); 
		if(Qheight>1000){
			$(".xQNav").css({"position":"fixed","top":"86px","left":"50%","margin-left":"410px"});
		}else{ 
			$(".xQNav").css({"position":"relative","top":"0","left":"0","margin-left":"0px"});
		}
		if(Qheight>1000&&Qheight<1139){
			$(".spcs a").addClass("one").parent().siblings("li").children("a").removeClass();
		}
		if(Qheight>1139&&Qheight<1258){
			$(".fhwl a").addClass("one").parent().siblings("li").children("a").removeClass();
		}
		if(Qheight>1258&&Qheight<2472){
			$(".spcm a").addClass("one").parent().siblings("li").children("a").removeClass();
		}
		if(Qheight>2472){
			$(".spzs a").addClass("one").parent().siblings("li").children("a").removeClass();
		}
	});
});
$(function(){
	$(".juZh").mouseenter(function(){
		$(this).children("h5").removeClass("mouseShow"); 
		$(this).children("p").removeClass("mouseShow"); 
	});
	$(".juZh").mouseleave(function(){
		$(this).children("h5").addClass("mouseShow");
		$(this).children("p").addClass("mouseShow"); 
	});
	$(".close").click(function(){
		$("#tanchu").fadeOut(400);
	});
	
});

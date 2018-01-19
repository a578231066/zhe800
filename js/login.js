$(function(){
	/*实现login页面点击切换tab头部*/
	$(".loginMode ul li a").click(function(){
		$(this).addClass("one").parent().siblings().children().removeClass("one");
	});
	/*实现tab选项卡登录窗口*/
	$(".loginMode ul li .dengLu").click(function(){
		$(".userLogin").addClass("show").siblings().removeClass("show");
	});
	$(".loginMode ul li .pDengLu").click(function(){
		$(".phoneLogin").addClass("show").siblings().removeClass("show");
	});
	/*实现获取验证码倒计时功能*/
	$(".get").click(function(){
    	var i=60;
    	$(".get").css({"pointer-events":"none","color":"#999","background":"#ccc"});
    	var a=setInterval(function() {
	        $(".get").html(i+"秒后重新发送");
    		i--;
    		if(i==0){
    			$(".get").css({"pointer-events":"auto","color":"#666"});
    			clearInterval(a);
    			$(".get").html("获取验证码");
    		}
    	}, 1000);	
    });
	/*实现手机号清除功能*/
	phoneClear();
	function phoneClear(){
		var ss=$("#main .login .loginCon .loginApi .phoneLogin form dl").eq(0).children("dd").children("input");
		var si=$("#main .login .loginCon .loginApi .phoneLogin form dl").eq(0).children("dd").children("img");
		ss.keyup(function(){
			$(this).siblings("img").fadeIn(200);
			if(ss.val()==""){
				$(this).siblings("img").fadeOut(200);
			}
		});
		ss.blur(function(){
			$(this).siblings("img").fadeOut(200);
		});
		ss.focus(function(){
			if(ss.val()!=""){
				$(this).siblings("img").fadeIn(200);
			}
			
		});
		si.click(function(){
			if(ss.val()!=""){
				ss.val(null);
			}
		});

	}
   
});
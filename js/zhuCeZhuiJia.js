$(function(){

    $("#mobile,#code").focus(function(){
        $(this).css({"border":"2px solid #80A2D9"});
    });
    $("#mobile,#code").blur(function(){
        $(this).css({"border":"1px solid #B6B6B6"});
    });

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

    function user(q,w){
        var User=$(q).val();
        if(User==""){
            $(q).parent().siblings("span").show().css("display","block").html(w);
            $(".btnRed").attr("disabled",true);
        }else{
            $(q).parent().siblings("span").hide();
            $(".btnRed").removeAttr("disabled");
        }
    }

    $('#code').on('blur keyup', function() {
        user("#code","验证码不能为空");
    });

    $('#mobile').on('blur keyup', function() {
        user("#mobile","手机号不能为空");
    });

    $("#submit").click(function(){
        user("#code","验证码不能为空");
        user("#mobile","手机号不能为空");
    });

});
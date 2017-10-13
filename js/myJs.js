

//底部导航切换

$(document).ready(function(){
		var g = 1 ;    /*灰色等于1 ，红色等于2*/
		var r = 2 ;
		var img_root = 'images/navBg-'            /*图片路径*/
		
	$('nav ul li').click(function(){
		var oli = $('nav ul li');
		var p = $(this).index()+1;
		var red_url = 'url(' + img_root + p + r +'.png)';
		
		function changeBg(i){					
			oli.eq(i).css('backgroundImage',grey_url);
		};
		for (var i=1; i <= oli.length ; i++ ) {
			grey_url = 'url(' + img_root + i + g +'.png)';
			j = i-1;
			changeBg(j);						
		};
		
		$(this).find('span').addClass('on');
		$(this).css('backgroundImage',red_url);
		$(this).siblings().find('span').removeClass('on');
	
		
		
	});
});


//登录验证


function checkPhone(){ 
			    var phone = document.getElementById('phone').value;
			    if(!(/^1[34578]\d{9}$/.test(phone))){ 
			        alert("请输入正确的手机号码！");  
			        return false; 
			    };
			};	



//有好感

$(document).ready(function(){
	$('.dt-top-r').click(function(){
		$(this).toggleClass('haogan');
	});
//	点×关闭
	$('.close').click(function(){
		$(this).parent('li').css('display','none');
	});
	 
});





//返回上一页

$(document).ready(function(){
	$('#hd_referrer').click(function(){
		window.location.href = document.referrer;
	});
});



//滑动选择


$(function () {

    $('.mobiselect').mobiscroll().select({
        theme: 'ios',
        lang: 'zh',
        display: 'center',
        minWidth: 200
    });

});



 


    


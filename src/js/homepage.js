$(document).ready(function(){
	// 头部导航按钮
	var $nav=$(".nav>li");
	$nav.mouseover(function(){
		$(this).css("color","#993300");
	});
	$nav.mouseout(function(){
		$(this).css("color","black");
	});

	// 头部logo
	$(".logo").mouseover(function(){
		$(this).animate({'font-size':'1.6em',''},200);
	});
	$(".logo").mouseout(function(){
		$(this).animate({'font-size':'1.5em'},200);
	});

	$nav0.click(function(){

	});
});
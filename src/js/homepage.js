$(document).ready(function(){
	// 头部导航按钮
	var $nav=$(".nav>li>a");
	$nav.mouseover(function(){
		$(this).css("color","#993300");
	}).mouseout(function(){
		$(this).css("color","black");
	});

	// 头部logo
	$(".logo").mouseover(function(){
		$(this).stop().animate({'font-size':'1.7em'},400);
	}).mouseout(function(){
		$(this).stop().animate({'font-size':'1.6em'},200);
	});
});
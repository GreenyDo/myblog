$(document).ready(function(){
	// 头部导航按钮
	var $nav=$(".nav>li");
	$nav.mouseover(function(){
		$(this).css("color","#993300");
	}).mouseout(function(){
		$(this).css("color","black");
	});

	// 头部logo
	$(".logo").mouseover(function(){
		$(this).animate({'font-size':'1.7em'},400);
	}).mouseout(function(){
		$(this).animate({'font-size':'1.6em'},200);
	});

	//Web按钮
	var $nav_web=$(".nav>li:eq(0)");
	$nav_web.click(function(){
		window.open("unicontent.html");
	})
});
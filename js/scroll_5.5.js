// JavaScript Document
$(function(){
	// 電腦版選單
	$(".block1").click(function(){
		$("html,body").stop(true,false).animate({scrollTop:0},800);
		return false;
	});
	$(".block2").click(function(){
		$("html,body").stop(true,false).animate({scrollTop:600},800);
		return false;
	});
	
	$(".block3").click(function(){
		$("html,body").stop(true,false).animate({scrollTop:2300},800);
		return false;
	});
	$(".block4").click(function(){
		$("html,body").stop(true,false).animate({scrollTop:3500},800);
		return false;
	});
	$(".block5").click(function(){
		$("html,body").stop(true,false).animate({scrollTop:3950},800);
		return false;
	});
	$(".gototop").click(function(){
		$("html,body").stop(true,false).animate({scrollTop:0},800);
		return false;
	});
});
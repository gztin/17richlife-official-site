$(function(){	
	$(".swiper-slide").hover(
	  function () {
	  	$(".introduce").removeClass("introduce_hide");
	    $(".introduce").addClass("introduce_show");
	  },
	  function () {
	    $(".introduce").removeClass("introduce_show");
	    $(".introduce").addClass("introduce_hide");
	  }
	);
});
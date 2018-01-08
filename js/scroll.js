// JavaScript Document
 jQuery(document).ready(function($) {
 
    $(".scroll a, .navbar-brand, .gototop").click(function(event){   
    	event.preventDefault();
    	$('html,body').animate({scrollTop:$(this.hash).offset().top-100}, 600,'swing');
    });
});
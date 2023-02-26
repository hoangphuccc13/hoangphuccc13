// JavaScript Document
new WOW().init();
$(document).ready(function(){
			$(".btn-toggle").click(function(){
				$(".menu").slideToggle()
			})
		})
$('#banner').owlCarousel({
		items:1,
		loop:true,
		nav:true,
		autoplay:true,
		autoplayTimeout:5000,
	
	})
	$('#myproject').owlCarousel({
    loop:true,
    margin:30,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }
    }
})
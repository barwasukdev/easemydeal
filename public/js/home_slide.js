
	$(document).ready(function () {	  
			$('.offer_slider.owl-carousel').owlCarousel({
				loop:true,
				margin:30,
				dots:true,
				nav:false,
				responsive:{
					0:{
						items:1
					},
					600:{
						items:3
					},
					1000:{
						items:3
					}
				}
			});
			$('.brochure_slider.owl-carousel').owlCarousel({
				loop:true,
				margin:0,
				dots:true,
				nav:false,
				autoplay:true,
				center:true,
				responsive:{
					0:{
						items:1
					},
					600:{
						items:3
					},
					1000:{
						items:3
					}
				}
			});
			$('.testimonial_slider.owl-carousel').owlCarousel({
				loop:true,
				margin:30,
				dots:true,
				nav:false,
				responsive:{
					0:{
						items:1
					},
					600:{
						items:3
					},
					1000:{
						items:3
					}
				}
			});
			$('.recognitions_slider.owl-carousel').owlCarousel({
				loop:false,
				margin:30,
				dots:false,
				nav:true,
				responsive:{
					0:{
						items:1
					},
					600:{
						items:1
					},
					1000:{
						items:1
					}
				}
			});

			$('.clients_slide.owl-carousel').owlCarousel({
				loop:true,
				margin:30,
				dots:false,
				nav:true,
				responsive:{
					0:{
						items:1
					},
					600:{
						items:1
					},
					1000:{
						items:1
					}
				}
			});
			$('.top_offer_slide.owl-carousel').owlCarousel({
				loop:true,
				margin:15,
				dots:false,
				nav:true,
				responsive:{
					0:{
						items:2
					},
					600:{
						items:2
					},
					1000:{
						items:2
					}
				}
			});
			$('.store_offer_slide.owl-carousel').owlCarousel({
				loop:true,
				margin:10,
				dots:false,
				nav:true,
				responsive:{
					0:{
						items:1
					},
					600:{
						items:1
					},
					1000:{
						items:1
					}
				}
			});
			
		}); 
	
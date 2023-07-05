var swiper = new Swiper(".mySwiper", {
	slidesPerView: 3,
	centeredSlides: false,
	spaceBetween: 30,
	pagination: {
		el: ".pagination",
		type: "fraction",
	},

	navigation: {
		nextEl: ".nextArrow",
		prevEl: ".prevArrow",
	},
	breakpoints: {
		1200: {
		slidesPerView: 4,
		},
		992: {
		slidesPerView: 3,
		},
		768: {
		slidesPerView: 2,
		},
		576: {
		slidesPerView: 1,
		},
		0: {
		slidesPerView: 1,
		},
	},
});
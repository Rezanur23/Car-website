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




// var swiper = new Swiper(".slide-content", {
// 	slidesPerView: 3,
// 	centeredSlides: true,
// 	spaceBetween: 30,
// 	pagination: {
// 	el: ".swiper-pagination",
// 	type: "fraction",
// 	},
// 	navigation: {
// 	nextEl: ".swiper-button-next",
// 	prevEl: ".swiper-button-prev",
// 	},
// });

// var appendNumber = 4;
// var prependNumber = 1;
// document
// 	.querySelector(".prepend-2-slides")
// 	.addEventListener("click", function (e) {
// 	e.preventDefault();
// 	swiper.prependSlide([
// 		'<div class="swiper-slide">Slide ' + --prependNumber + "</div>",
// 		'<div class="swiper-slide">Slide ' + --prependNumber + "</div>",
// 	]);
// 	});
// document
// 	.querySelector(".prepend-slide")
// 	.addEventListener("click", function (e) {
// 	e.preventDefault();
// 	swiper.prependSlide(
// 		'<div class="swiper-slide">Slide ' + --prependNumber + "</div>"
// 	);
// 	});
// document
// 	.querySelector(".append-slide")
// 	.addEventListener("click", function (e) {
// 	e.preventDefault();
// 	swiper.appendSlide(
// 		'<div class="swiper-slide">Slide ' + ++appendNumber + "</div>"
// 	);
// 	});
// document
// 	.querySelector(".append-2-slides")
// 	.addEventListener("click", function (e) {
// 	e.preventDefault();
// 	swiper.appendSlide([
// 		'<div class="swiper-slide">Slide ' + ++appendNumber + "</div>",
// 		'<div class="swiper-slide">Slide ' + ++appendNumber + "</div>",
// 	]);
// 	});
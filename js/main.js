const swiper = new Swiper('.swiper', {
	direction: 'horizontal',
	slidesPerView: 6,
	spaceBetween: 0,
	speed: 10000,
	effect: 'slide',
	loop: true,
	autoplay: {
		delay: 0, // Задержка в миллисекундах между переходами
		disableOnInteraction: false, // Не останавливать автовоспроизведение при взаимодействии пользователя
	},
});

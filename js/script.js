document.addEventListener("DOMContentLoaded", function () {

    var slider = document.querySelector('.probeg_bg');
    var leftArrow = document.querySelector('.probeg_icons[src="img/icons/whites.png"]');
    var rightArrow = document.querySelector('.probeg_icons[src="img/icons/whitel.png"]');

    // Устанавливаем начальный индекс слайда
    var currentSlide = 0;

    // Массив фоновых изображений для слайдера
    var slideImages = [
      "url('../img/probeg.png') center / cover no-repeat",
      "url('../img/Bg.png') center / cover no-repeat",
	  "url('../img/bg_1.png') center / cover no-repeat",
    ];

    // Функция для обновления фона слайдера
    function updateSlider() {
      slider.style.background = slideImages[currentSlide];
    }

    // Функция для обработки клика на стрелку влево
    function prevSlide() {
      currentSlide = (currentSlide - 1 + slideImages.length) % slideImages.length;
      updateSlider();
    }

    // Функция для обработки клика на стрелку вправо
    function nextSlide() {
      currentSlide = (currentSlide + 1) % slideImages.length;
      updateSlider();
    }

    // Добавляем слушателей событий клика на кнопки стрелок
    leftArrow.addEventListener('click', prevSlide);
    rightArrow.addEventListener('click', nextSlide);
	
	    // Добавляем автоматическую прокрутку каждые 5 секунд (5000 миллисекунд)
    var intervalId = setInterval(nextSlide, 5000);

    // Останавливаем прокрутку при наведении мыши
    slider.addEventListener('mouseenter', function () {
      clearInterval(intervalId);
    });

    // Возобновляем прокрутку при уходе мыши
    slider.addEventListener('mouseleave', function () {
      intervalId = setInterval(nextSlide, 5000);
    });
  });

document.getElementById('scrollContainer').addEventListener('click', function() {
	setTimeout(function() {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}, 300); 
});
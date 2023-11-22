//хайд-авто
window.onload = function () {
  // Получение всех элементов меню.
  var menuItems = document.querySelectorAll('.navbar_menu li a');
  
  // Проходимся по всем элементам меню и назначаем обработчики клика.
  menuItems.forEach(function (item) {
    item.addEventListener('click', function () {
      // Проверка, был ли элемент уже активен.
      if (item.classList.contains('active')) {
        // Если да, удалить класс active и выход из обработчика.
        item.classList.remove('active');
        return; // Досрочный выход, чтобы избежать повторной установки класса active
      }

      // Если найден другой активный элемент, удаляем класс active у предыдущего.
      var currentActive = document.querySelector('.navbar_menu li a.active');
      if (currentActive) {
        currentActive.classList.remove('active');
      }

      item.classList.add('active');
    });
  });

  var second = document.getElementById("second");
  if (second) {
    second.style.display = "none";
  }

};

function mother() {
  var second = document.getElementById("second");
  var first = document.getElementById("first");
  
  if (second.style.display === "block") {
    second.style.display = "none";
    first.style.display = "block";
    var closeButton = document.getElementById("closeButton");
    if (closeButton) {
      closeButton.remove(); // Убирать кнопку закрытия
    }
  } else {
    first.style.display = "none";
    second.style.display = "block";
    addCloseButton(); // Добавлять кнопку закрытия
  }
}

/* function addCloseButton() {
  var closeButtonExists = document.getElementById("closeButton");
  if (!closeButtonExists) {
    var closeButton = document.createElement("button");
    closeButton.id = "closeButton";
    closeButton.innerText = "✖️";
    closeButton.style.position = "fixed";
    closeButton.style.right = "20px";
    closeButton.style.top = "20px";
    closeButton.onclick = mother; // Назначать ту же функцию для закрытия блока
    document.body.appendChild(closeButton);
  } БЕДЫ С БАШКОЙ
} */

/* #closeButton
  padding: 10px 20px
  background-color: transparent
  border: none
  text-align: center
  text-decoration: none
  display: inline-block
  font-size: 24px
  cursor: pointer
  border-radius: 4px
 */

//Кнопка топ справа
window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  var topBtn = document.getElementById("topBtn");
  var promoSection = document.querySelector(".promo");
  var scrolled = window.scrollY || document.documentElement.scrollTop;

  // Порог для отображения кнопки после прокрутки блока promoSection
  var threshold = promoSection.offsetTop + promoSection.offsetHeight;

  if (scrolled > threshold) {
      topBtn.style.display = "block";
  } else {
      topBtn.style.display = "none";
  }
}

function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

//Слайдер
document.addEventListener("DOMContentLoaded", function () {

    var slider = document.querySelector('.probeg_bg');
    var leftArrow = document.querySelector('.probeg_icons[src="img/icons/whites.png"]');
    var rightArrow = document.querySelector('.probeg_icons[src="img/icons/whitel.png"]');

    // Устанавливаем начальный индекс слайда
    var currentSlide = 0;

    // Массив фоновых изображений для слайдера
    var slideImages = [
      "url('../img/probeg_1.png') center / cover no-repeat",
      "url('../img/probeg.png') center / cover no-repeat",
      "url('../img/probeg_2.png') center / cover no-repeat",
      "url('../img/6.png') center / cover no-repeat",
      "url('../img/probeg_4.png') center / cover no-repeat",
      "url('../img/probeg_5.png') center / cover no-repeat",
      "url('../img/probeg_6.png') center / cover no-repeat",
	    "url('../img/bg_1.png') center / cover no-repeat",
    ];

    function updateSlider() {
      slider.style.background = slideImages[currentSlide];
    }

    function prevSlide() {
      currentSlide = (currentSlide - 1 + slideImages.length) % slideImages.length;
      updateSlider();
    }

    function nextSlide() {
      currentSlide = (currentSlide + 1) % slideImages.length;
      updateSlider();
    }

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

//Кнопка топ снизу контейнер
document.getElementById('scrollContainer').addEventListener('click', function() {
	setTimeout(function() {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}, 300); 
});
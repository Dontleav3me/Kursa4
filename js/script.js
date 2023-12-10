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
    }
  } else {
    first.style.display = "none";
    second.style.display = "block";
  }
}

//гамбургер
document.getElementById("mobile-toggle").addEventListener("click", function() {
  this.classList.toggle("active");
  document.querySelector(".navbar_wrap").classList.toggle("active");
});

// Получаем все элементы меню
var menuItems = document.querySelectorAll('.navbar_menu li a');

// Функция для закрытия меню
function closeMenu() {
  document.getElementById("mobile-toggle").classList.remove("active");
  document.querySelector(".navbar_wrap").classList.remove("active");
}

// Добавляем событие клика ко всем пунктам меню для закрытия мобильного меню после выбора
menuItems.forEach(function(menuItem) {
  menuItem.addEventListener('click', function() {
    closeMenu(); // Вызываем функцию закрытия меню
  });
});


// Код для открытия модальных окон
document.querySelectorAll('.modal-open-link').forEach(function(element) {
  element.addEventListener('click', function(event) {
    event.preventDefault(); // Отменяем стандартное действие элемента
    var modalSelector = element.tagName === 'A' ? element.getAttribute('href') : element.getAttribute('data-modal');
    var modal = document.querySelector(modalSelector);
    if (modal) {
      modal.style.display = 'block'; // Показываем модальное окно
    }
  });
});

// Получаем доступ к переключателю и обёртке меню
var toggle = document.getElementById('mobile-toggle');
var navbarWrap = document.querySelector('.navbar_wrap');


// Код для закрытия модальных окон
document.querySelectorAll('.close').forEach(function(button) {
  button.addEventListener('click', function() {
    var modal = button.closest('.modal'); // Получаем ближайший элемент с классом .modal
    modal.style.display = 'none'; // Скрываем модальное окно
  });
});

// Опциональный код для закрытия модального окна при клике вне его содержимого
window.addEventListener('click', function(event) {
  if (event.target.classList.contains('modal')) { // Если клик по фону модального окна
    event.target.style.display = 'none'; // Скрываем его
  }
});

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
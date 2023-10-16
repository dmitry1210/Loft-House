// Nav icon
const navBtn = document.querySelector(".nav-icon-btn");
const navIcon = document.querySelector(".nav-icon");
const nav = document.querySelector(".header__top-row");

navBtn.onclick = function () {
  navIcon.classList.toggle("nav-icon--active");
  nav.classList.toggle("header__top-row--mobile");
  document.body.classList.toggle("no-scroll");
};

// Phone mask
mask("[data-tel-input]");

// Удаляем '+' если больше ничего не введено, чтобы показать placeholder

const phoneInputs = document.querySelectorAll("[data-tel-input]");
phoneInputs.forEach((input) => {
  input.addEventListener("input", () => {
    if (input.value == "+") {
      input.value = "";
    }
  });
  input.addEventListener("blur", () => {
    if (input.value == "+") {
      input.value = "";
    }
  });
});

// Yandex Map
// Функция ymaps.ready() будет вызвана, когда
// загрузятся все компоненты API, а также когда будет готово DOM-дерево.
ymaps.ready(init);
function init() {
  // Создание карты.
  var map = new ymaps.Map("map", {
    // Координаты центра карты.
    // Порядок по умолчанию: «широта, долгота».
    // Чтобы не определять координаты центра карты вручную,
    // воспользуйтесь инструментом Определение координат.
    center: [59.943543, 30.338928],
    // Уровень масштабирования. Допустимые значения:
    // от 0 (весь мир) до 19.
    zoom: 14,
  });

  var myPlacemark = new ymaps.Placemark(
    [59.943543, 30.338928],
    {
      balloonContent: `
      <div class="balloon">
        <div class="balloon__address">Наб. реки Фонтанки 10-15</div>
        <div class="balloon__contacts">
          <a href="tel:+78121234567">8 (812) 123-45-67</a>
        </div>
      </div>
      `,
    },
    {
      iconLayout: "default#image",
      iconImageHref: "./img/map/location-pin.svg",
      icon_imagesize: [40, 40],
      iconImageOffset: [-20, -40],
    }
  );

  map.controls.remove("geolocationControl"); // удаляет геолокацию
  map.controls.remove("searchControl"); // удаляет поиск
  map.controls.remove("trafficControl"); // удаляет контроль трафика
  map.controls.remove("typeSelector"); // удаляет тип карты

  // map.controls.remove('fullscreenControl'); // удаляет кнопку перехода в полноэкранный режим
  // map.controls.remove('zoomControl'); // удаляет контрол зуммирования
  map.controls.remove("rulerControl"); // удаляет контрол правил
  map.controls.remove("scrollZoom"); // отключает скролл карты

  map.geoObjects.add(myPlacemark);
  myPlacemark.balloon.open();
}

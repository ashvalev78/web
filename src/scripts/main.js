const wrapper = document.querySelector('.wrapper');
const popupBg = document.querySelector('.popup-bg');
const closePopupBtn = document.querySelector('#close-popup');
const popups = document.querySelectorAll('.popup');

function closePopups() {
  popups.forEach((popup) => {
    popup.classList.remove('visible');
    wrapper.classList.remove('blur');
    popupBg.classList.remove('visible');
  });
}

function showPopup(popup) {
  popup.classList.add('visible');
  wrapper.classList.add('blur');
  popupBg.classList.add('visible');
}

closePopupBtn.addEventListener('click', closePopups);

// радио-элемент для смены вида
const view = document.querySelectorAll('.change-view__hidden');
// список фото
const photos = document.querySelector('.photos-collection__list');

// изменение отображения списка фото в зависимости от предпочтений пользователя
view[0].onchange = () => {
  if (view[0].checked) {
    photos.classList.add('grid-list');
    photos.classList.remove('std-list');
  } else {
    photos.classList.remove('grid-list');
    photos.classList.add('std-list');
  }
};

view[1].onchange = () => {
  if (view[1].checked) {
    photos.classList.remove('grid-list');
    photos.classList.add('std-list');
  } else {
    photos.classList.add('grid-list');
    photos.classList.remove('std-list');
  }
};

// отображение попапа с выбранным фото

// попап для изображения
const imgPopup = document.querySelector('.img-popup');
// коллекция изображений
let images = document.querySelectorAll('.photos-collection__list-item');


function takeCloserLook() {
  images.forEach((image) => {
    if (!image.classList.contains('add-img')) {
      image.addEventListener('click', () => {
        imgPopup.innerHTML = image.querySelector('.user-img').outerHTML;
        showPopup(imgPopup);
      });
    }
  });
}

takeCloserLook();

// смена приватности изображения, дописать сюда бэк
function changePrivacy(btn) {
  btn.classList.toggle('visible');
}

// обработчик на кнопки смены приватности
document.querySelectorAll('.visible-img').forEach(img => {
  img.addEventListener('click', () => {
    changePrivacy(img);
  });
});

// Показать/скрыть настройки

document.querySelector('.profile-info__config').addEventListener('click', (e) => {
  e.preventDefault();
  let configPopup = document.querySelector('.config-popup');

  showPopup(configPopup);
});

// подтвержение изменений в настройках
document.querySelector('.config__submit').addEventListener('click', () => {
  // вписать код для изменения статуса на клиентской части и сервере
  closePopups();
});
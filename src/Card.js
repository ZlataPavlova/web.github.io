//класс Card Это класс, создающий карточку. 

class Card {
  constructor(name, link) {
    this.name = name;
    this.link = link;

    // Надо исправить : Нельзя вызывать или создавать реализацию в конструторе класса
    // Вызывая реализацию в конструторе класса, при наследовании, вы не сможите вызвать другой метод не вызвав реализацию в конструкторе
    // Если Вам необходимо будет вызвать конструктор родителя при наследовании в одном из классов
    // так же, вы заведомо делаете класс не тестируемым, так как всегда при инициализации будет вызываться конструктор класса

    // слушатели перенесите в отдельный метод класса

  }
  //метод с шаблоном карточки для html
  create(name, link) {
    /*  Можно лучше: 
    *  Альтернативный способ создания карточки. При нем не требуется создавать вручную все
    * Вы можете реализовать функцию, которая сразу же возвращает “кусок” разметки. Это решает проблему постоянного createElement DOM-элементов. 
     function getTemplate(data){ 
       const template = `<div class="place-card"> 
                   <div class="place-card__image" style="background: url(${data.link})"> 
                     <button class="place-card__delete-icon"></button>
                   </div>
                   <div class="place-card__description">
                     <h3 class="place-card__name">${data.name}</h3>
                     <button class="place-card__like-icon"></button>
                   </div>
                 </div>`
     return template;
     } 
    *  Этот кусок разметки в дальнейшем можно вставить в DOM, воспользовавшись методом insertAdjacentHTML().
    *  https: //developer.mozilla.org/ru/docs/Web/API/Element/insertAdjacentHTML
    *    pointElement.insertAdjacentHTML('afterend', getTemplate(data));
    */
    //создаем разметку для карточек
    const placeCard = document.createElement('div');
    const cardImage = document.createElement('div');
    const cardButtonDelete = document.createElement('button');
    const cardDescription = document.createElement('div');
    const cardName = document.createElement('h3');
    const cardButtonLike = document.createElement('button');
    // добавляем классы
    placeCard.classList.add('place-card');
    cardImage.classList.add('place-card__image');
    cardImage.setAttribute('style', ('style', `background-image: url(${link})`)); // картинка для карточки
    cardButtonDelete.classList.add('place-card__delete-icon');
    cardDescription.classList.add('place-card__description');
    cardName.classList.add('place-card__name');
    cardName.textContent = name; //название карточки
    cardButtonLike.classList.add('place-card__like-icon');
    // вкладываем блоки один в другой
    cardImage.appendChild(cardButtonDelete);
    cardDescription.appendChild(cardName);
    cardDescription.appendChild(cardButtonLike);
    placeCard.appendChild(cardImage);
    placeCard.appendChild(cardDescription);
    this.setEventListeners(placeCard);
    return placeCard
  }
  //метод для поставления лайков на карточке
  like(event) {
    if (event.target.classList.contains('place-card__like-icon')) {
      event.target.classList.toggle('place-card__like-icon_liked');
    }
  }
  //метод для удаления карточки по клику на иконку корзины
  remove(event) {
    if (event.target.classList.contains('place-card__delete-icon')) {
      const eventTarget = event.target;
      const cardDelete = eventTarget.closest('.place-card');
      cardDelete.parentNode.removeChild(cardDelete);
    }
  }
  //метод определяющий какую картинку нужно открыть при клике на карточку
  findImage(event) {
    if (event.target.classList.contains('place-card__image')) {
      let image = event.target.style.backgroundImage.slice(5, -2);
      const Image = document.querySelector('.image');
      Image.setAttribute('src', image);
    }
  }
  //метод слушателей
  setEventListeners(placeCard) {
    placeCard.querySelector('.place-card__like-icon').addEventListener('click', this.like.bind(this));
    placeCard.querySelector('.place-card__delete-icon').addEventListener('click', this.remove.bind(this));
    placeCard.querySelector('.place-card__image').addEventListener('click', this.findImage.bind(this));
  }
};

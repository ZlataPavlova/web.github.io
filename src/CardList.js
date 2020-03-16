
import {Api} from './Api';

  export class CardList {
  constructor(card, container) {
  this.card=card;
  this.container=container;
  }


  addCard(name, link) {

    this.cards.push(this.card.create(name, link));
    this.container.appendChild(this.card.create(name, link));

  }
  //перебор массива для создания 10 карточек при загрузке страницы
  render(container, cards) {
    this.container = container;
    this.cards = cards;
 
    this.cards.forEach((item) => this.addCard(item.name, item.link));
    
  }

};



//класс для открытия и закрытия форм

class Popup {
    constructor(popup, popupButtonOpen, popupButtonClose) {
        this.popup = popup;
        this.popupButtonOpen = popupButtonOpen;
        this.popupButtonClose = popupButtonClose;
        this.popupButtonOpen.addEventListener('click', this.openFormCard.bind(this));
        this.popupButtonClose.addEventListener('click', this.closeFormCard.bind(this));

    }
    //метод для открытия popup
    openFormCard() {
        if (event.target.classList.contains('button') || event.target.classList.contains('place-card__image')) {
            this.popup.classList.add('popup_is-opened');
        }
    }
     //метод для закрытия popup
    closeFormCard() {
        
        this.popup.classList.remove('popup_is-opened');
    }

}





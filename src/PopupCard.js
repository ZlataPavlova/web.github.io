import {Popup} from './Popup';
import {validationCard} from './FormValidatorCard';

export class PopupCard extends Popup {
    constructor(popup, popupButtonOpen, popupButtonClose, popupButton, form, validationCard) {
        
        super(popup, popupButtonOpen, popupButtonClose);
        this.form=form;
        this.popupButton = popupButton;
        this.validationCard = validationCard;
     
        this.popup.addEventListener('input', this.validation.bind(this));
    }
    //метод для проверки данных введеных в форму добавления карточки
    validation() {
        const name = this.form.elements.name;
        const link = this.form.elements.link;
        this.popup.addEventListener('input', (this.validationCard.setEventListeners(name, link)));
        this.popup.addEventListener('input', (this.validationCard.setSubmitButtonState(this.popupButton)));

    }
}
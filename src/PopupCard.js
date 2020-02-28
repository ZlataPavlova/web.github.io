class PopupCard extends Popup {
    constructor(popup, popupButtonOpen, popupButtonClose, popupButton, form, validationCard) {
        
        super(popup, popupButtonOpen, popupButtonClose);
        this.form=form;
        this.popupButton = popupButton;
        this.validationCard = validationCard;
     
        this.popup.addEventListener('input', this.validation.bind(this));
    }
    //метод для проверки данных введеных в форму добавления карточки
    validation() {

        /** Надо исправить: вы обращаетесь в классе к переменной formCard объявленной глобально,
        так делать нельзя. Вы можете передать эту переменную в качестве параметров, а потом уже обращаться к ней
        Стремитесь к тому чтобы класс у вас был самодостаточным, и не зависел от глобальных переменных или классов
        объявленных глобально, а только от тех данных которые были переданны через параметры
        */
        const name = this.form.elements.name;
        const link = this.form.elements.link;
        /** Надо исправить: вы обращаетесь в классе к переменной validationCard объявленной глобально,
        так делать нельзя. Вы можете передать эту переменную в качестве параметров, а потом уже обращаться к ней 
        Стремитесь к тому чтобы класс у вас был самодостаточным, и не зависел от глобальных переменных или классов 
        объявленных глобально, а только от тех данных которые были переданны через параметры 
        */
        this.popup.addEventListener('input', (this.validationCard.setEventListeners(name, link)));
        this.popup.addEventListener('input', (this.validationCard.setSubmitButtonState(popupButton)));

    }
}
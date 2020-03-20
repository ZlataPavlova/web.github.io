//класс валидации для формы добавления карточек

export class FormValidatorCard {

  constructor(words, popupErrorName, popupErrorLink) {
    this.words = words;
    this.popupErrorName = popupErrorName;
    this.popupErrorLink = popupErrorLink;
  }

  checkInputFirstValidityNoInfo() {

    return !(this.inputFirst.value.length === 0);
  }

  addErrorNoNameInputFirst() {
    if (this.checkInputFirstValidityNoInfo() === false) {

      this.popupErrorName.textContent = this.words.ru.NoName;

    }
  };

  checkInputSecondValidityNoInfo() {
    return !(this.inputSecond.value.length === 0);
  }

  addErrorNoInfoInputSecond() {

    if (this.checkInputSecondValidityNoInfo() === false) {

      this.popupErrorLink.textContent = this.words.ru.NoName;
    }
  };

  checkInputFirstValidityLimitInfo() {
    return !(this.inputFirst.value.length === 1 || this.inputFirst.value.length > 30)
  }

  addErrorLimitNameInputFirst() {

    if (this.checkInputFirstValidityLimitInfo() === false) {

      this.popupErrorName.textContent = this.words.ru.NoLimit;
    }
  };

  checkLinkInputSecond() {

    return this.inputSecond.value.startsWith('http');
  };

  //добавление сообщения о ошибки если в строку "Ссылка" добавлена не ссылка или убираем его
  addErrorLinkInputSecond() {
    if (this.checkLinkInputSecond() === false) {
      this.popupErrorLink.textContent = this.words.ru.NoLink;
    }
  };

  //удаление сообщения об ошибки из первой строки
  removeAddErrorInputFirst() {
    if (this.checkInputFirstValidityLimitInfo() === true && this.checkInputFirstValidityNoInfo() === true) {
      this.popupErrorName.textContent = '';
    }
  }
  //удаление сообщения об ошибки из второй строки
  removeAddErrorInfoInputSecond() {
    if (this.checkInputSecondValidityNoInfo() === true && this.checkLinkInputSecond() === true) {
      this.popupErrorLink.textContent = '';
    }
  }
  //активация и деактивация кнопки после проверки всех условий
  setSubmitButtonState(button) {

    if (this.checkInputFirstValidityLimitInfo() === true && this.checkInputFirstValidityNoInfo() === true && this.checkInputSecondValidityNoInfo() === true && this.checkLinkInputSecond() === true) {
      button.removeAttribute('disabled');
      button.classList.add('popup__button_active')

    } else {
      button.setAttribute('disabled', '');
      button.classList.remove('popup__button_active');
    }
  }

  setEventListeners(inputFirst, inputSecond) {
    //принимаем значения из строк формы редактирование профиля (из PopupCards)
    this.inputFirst = inputFirst;
    this.inputSecond = inputSecond;

    //слушатели на добавление или удаление сообщений при вводе информации в строку
    inputFirst.addEventListener('input', this.addErrorNoNameInputFirst.bind(this));
    inputSecond.addEventListener('input', this.addErrorLinkInputSecond.bind(this));

    inputSecond.addEventListener('input', this.addErrorNoInfoInputSecond.bind(this));
    inputFirst.addEventListener('input', this.addErrorLimitNameInputFirst.bind(this));

    inputFirst.addEventListener('input', this.removeAddErrorInputFirst.bind(this));
    inputSecond.addEventListener('input', this.removeAddErrorInfoInputSecond.bind(this));

    //слушатели на запуск проверки введенной пользователем информации
    inputFirst.addEventListener('input', this.checkInputFirstValidityLimitInfo.bind(this));
    inputFirst.addEventListener('input', this.checkInputFirstValidityNoInfo.bind(this));
    inputSecond.addEventListener('input', this.checkLinkInputSecond.bind(this));
    inputSecond.addEventListener('input', this.checkInputSecondValidityNoInfo.bind(this));



  }
};
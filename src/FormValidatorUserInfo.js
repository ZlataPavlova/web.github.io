

//класс валидации для формы редактирования профиля пользователя
 export class FormValidatorUserInfo {

  constructor(words, popupErrorUserName, popupErrorUserInfo) {
    this.words = words;
    this.popupErrorUserName = popupErrorUserName;
    this.popupErrorUserInfo = popupErrorUserInfo;

  }
  //проверка первой строки формы на наличие введенных символов
  checkInputFirstValidityNoInfo() {
    // можно просто так return !(this.inputFirst.value.length === 0);
    return !(this.inputFirst.value.length === 0);
  }
  //добавление сообщения об ошибке при отсутствии введенных символов в первой строке
  addErrorNoNameInputFirst() {
    if (this.checkInputFirstValidityNoInfo() === false) {

      this.popupErrorUserName.textContent = this.words.ru.NoName;
    }
  };
  //проверка второй строки формы на наличие введенных символов
  checkInputSecondValidityNoInfo() {
    return !(this.inputSecond.value.length === 0);
  }
  //добавление сообщения об ошибке при отсутствии введенных символов во второй строке
  addErrorNoInfoInputSecond() {
    if (this.checkInputSecondValidityNoInfo() === false) {

      this.popupErrorUserInfo.textContent = this.words.ru.NoName;
    }
  };
  //проверка мах и мин возможного количества символов в первой строке
  checkInputFirstValidityLimitInfo() {
    return !(this.inputFirst.value.length === 1 || this.inputFirst.value.length > 30)
  }
  //добавление сообщения об ошибке при превышении или недостаточном количестве введенных символов в первой строке
  addErrorLimitNameInputFirst() {
    if (this.checkInputFirstValidityLimitInfo() === false) {

      this.popupErrorUserName.textContent = this.words.ru.NoLimit;
    }
  };
  //проверка мах и мин возможного количества символов во второй строке
  checkInputSecondValidityLimitInfo() {
    if (this.inputSecond.value.length === 1 || this.inputSecond.value.length > 30) {
      return false;
    }
    return true;
  }
  //добавление сообщения об ошибке при отсутствии введенных символов во второй строке
  addErrorLimitInfoInputSecond() {
    if (this.checkInputSecondValidityLimitInfo() === false) {
      this.popupErrorUserInfo.textContent = this.words.ru.NoLimit;
    }
  };
  //удаление сообщения об ошибки из первой строки
  removeAddErrorInputFirst() {
    if (this.checkInputFirstValidityLimitInfo() === true && this.checkInputFirstValidityNoInfo() === true) {
      this.popupErrorUserName.textContent = '';
    }
  }
  //удаление сообщения об ошибки из второй строки
  removeAddErrorInfoInputSecond() {
    if (this.checkInputSecondValidityNoInfo() === true && this.checkInputSecondValidityLimitInfo() === true) {
      this.popupErrorUserInfo.textContent = '';
    }
  }
  //активация и деактивация кнопки после проверки всех условий
  setSubmitButtonState(button) {
    if (this.checkInputFirstValidityLimitInfo() === true && this.checkInputFirstValidityNoInfo() === true && this.checkInputSecondValidityNoInfo() === true && this.checkInputSecondValidityLimitInfo() === true) {
      button.removeAttribute('disabled');
      button.classList.add('popup__button_active')

    } else {
      button.setAttribute('disabled', '');
      button.classList.remove('popup__button_active');
    }
  }

  setEventListeners(inputFirst, inputSecond) {
    //принимаем значения из строк формы редактирование профиля (из PopupUserProfile)
    this.inputFirst = inputFirst;
    this.inputSecond = inputSecond;
    //слушатели на добавление или удаление сообщений при вводе информации в строку
    this.inputFirst.addEventListener('input', this.addErrorNoNameInputFirst.bind(this));
    this.inputSecond.addEventListener('input', this.addErrorNoInfoInputSecond.bind(this));
    this.inputFirst.addEventListener('input', this.addErrorLimitNameInputFirst.bind(this));
    this.inputSecond.addEventListener('input', this.addErrorLimitInfoInputSecond.bind(this));
    this.inputFirst.addEventListener('input', this.removeAddErrorInputFirst.bind(this));
    this.inputSecond.addEventListener('input', this.removeAddErrorInfoInputSecond.bind(this));

    //слушатели на запуск проверки введенной пользователем информации
    this.inputFirst.addEventListener('input', this.checkInputFirstValidityLimitInfo.bind(this));
    this.inputFirst.addEventListener('input', this.checkInputFirstValidityNoInfo.bind(this));
    this.inputSecond.addEventListener('input', this.checkInputSecondValidityLimitInfo.bind(this));
    this.inputSecond.addEventListener('input', this.checkInputSecondValidityNoInfo.bind(this));



  }
};


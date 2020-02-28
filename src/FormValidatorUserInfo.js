
// два класса проверки один для формы "Изменения профиля", второй для формы добавления карточки

//класс валидации для формы редактирования профиля пользователя
class FormValidatorUserInfo {
  /*  Можно лучше: В качестве параметров передавайте не переменные, а объект
  *  если вы в ходе развития проекта захотите добавить переменных, то вам придётся менять код во многих местах 
  *  https: //refactoring.guru/ru/smells/long-parameter-list 
  * Как пример:  
   const myObject = {name:"test", url : "http//:ya.ru"}
   function myFunction(param)
   {
     param.name;
     param.url;
   }
   myFunction(myObject)
  */
  constructor(words, popupErrorUserName, popupErrorUserInfo) {
    this.words = words;
    this.popupErrorUserName=popupErrorUserName;
    this.popupErrorUserInfo=popupErrorUserInfo;
    // Надо исправить: Перед сдачей работы на проверку или публикацией 
    // удаляйте console.log() везде 
    // console.log() используется только для разработки
  }
  //проверка первой строки формы на наличие введенных символов
  checkInputFirstValidityNoInfo() {
    // можно просто так return !(this.inputFirst.value.length === 0);
    return !(this.inputFirst.value.length === 0);
  }
  //добавление сообщения об ошибке при отсутствии введенных символов в первой строке
  addErrorNoNameInputFirst() {
    if (this.checkInputFirstValidityNoInfo() === false) {
      // Можно лучше: обычно названия, для примера 'Должно быть от 2 до 30 символов' 
      // выносят в отдельный объект. Допустим может появится задача сделать многоязычный сайт
      // Для примера : const words = { validationLenght: 'Должно быть от 2 до 30 символов'	} 
      // Далее words передаётся в функцию и используется.

      /** Надо исправить: вы обращаетесь в классе к переменной words объявленной глобально,
      так делать нельзя. Вы можете передать эту переменную в качестве параметров, а потом уже обращаться к ней 
      Стремитесь к тому чтобы класс у вас был самодостаточным, и не зависел от глобальных переменных или классов 
      объявленных глобально, а только от тех данных которые были переданны через параметры 
      */
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
      // Можно лучше: обычно названия, для примера 'Должно быть от 2 до 30 символов'
      // выносят в отдельный объект. Допустим может появится задача сделать многоязычный сайт
      // Для примера : const words = { validationLenght: 'Должно быть от 2 до 30 символов'	} 
      // Далее words передаётся в функцию и используется.
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
      // Можно лучше: обычно названия, для примера 'Должно быть от 2 до 30 символов'
      // выносят в отдельный объект. Допустим может появится задача сделать многоязычный сайт
      // Для примера : const words = { validationLenght: 'Должно быть от 2 до 30 символов'	} 
      // Далее words передаётся в функцию и используется.
      this.popupErrorUserName.textContent = this.words.ru.NoLimit;
    }
  };
  //проверка мах и мин возможного количества символов во второй строке
  checkInputSecondValidityLimitInfo() {
    // можно лучше: Для валидации используйте кастомный метод validation
    // https: //developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5/Constraint_validation#Constraint_API%27s_element.setCustomValidity() 
    if (this.inputSecond.value.length === 1 || this.inputSecond.value.length > 30) {
      return false;
    }
    return true;
  }
  //добавление сообщения об ошибке при отсутствии введенных символов во второй строке
  addErrorLimitInfoInputSecond() {
    if (this.checkInputSecondValidityLimitInfo() === false) {
      // Можно лучше: обычно названия, для примера 'Должно быть от 2 до 30 символов'
      // выносят в отдельный объект. Допустим может появится задача сделать многоязычный сайт
      // Для примера : const words = { validationLenght: 'Должно быть от 2 до 30 символов'	} 
      // Далее words передаётся в функцию и используется.
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
    // здесь можно сделать несколько переносов строки. 
    // такие сложные условия очень тяжело анализировать
    if (this.checkInputFirstValidityLimitInfo() === true && this.checkInputFirstValidityNoInfo() === true && this.checkInputSecondValidityNoInfo() === true && this.checkInputSecondValidityLimitInfo() === true) {
      button.removeAttribute('disabled');
      button.classList.add('popup__button_active')
      /* Можно лучше: удалите else а внутри условия добавьте return
       например было: 
       if(условие){  
         // ваш код 
       } else if(условие2){ 
         // ваш код 
       } 
       стало : 
       if(условие){  
           // ваш код 
        return; 
      } 
     
       if(условие2){ 
        // ваш код 
        return; 
      } 
     
    */
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


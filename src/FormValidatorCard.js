//класс валидации для формы добавления карточек

// Надо исправить: Вынесите в отдельный файл этот класс
class FormValidatorCard {
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
    constructor(words, popupErrorName, popupErrorLink) {
      this.words = words;
      this.popupErrorName = popupErrorName;
      this.popupErrorLink = popupErrorLink;
      // Надо исправить: Перед сдачей работы на проверку или публикацией 
      // удаляйте console.log() везде 
      // console.log() используется только для разработки.
      //нужно порешать что с этими вызовами
    }
  
    checkInputFirstValidityNoInfo() {
      // можно просто так return !(this.inputFirst.value.length === 0);
      return !(this.inputFirst.value.length === 0);
    }
  
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
       this.popupErrorName.textContent = this.words.ru.NoName;
  
      }
    };
  
    checkInputSecondValidityNoInfo() {
      return !(this.inputSecond.value.length === 0);
    }
  
    addErrorNoInfoInputSecond() {
  
      if (this.checkInputSecondValidityNoInfo() === false) {
        // Можно лучше: обычно названия, для примера 'Должно быть от 2 до 30 символов'
        // выносят в отдельный объект. Допустим может появится задача сделать многоязычный сайт
        // Для примера : const words = { validationLenght: 'Должно быть от 2 до 30 символов'	} 
        // Далее words передаётся в функцию и используется.
        this.popupErrorLink.textContent = this.words.ru.NoName;
      }
    };
  
    checkInputFirstValidityLimitInfo() {
      return !(this.inputFirst.value.length === 1 || this.inputFirst.value.length > 30)
    }
  
    addErrorLimitNameInputFirst() {
  
      if (this.checkInputFirstValidityLimitInfo() === false) {
        // Можно лучше: обычно названия, для примера 'Должно быть от 2 до 30 символов'
        // выносят в отдельный объект. Допустим может появится задача сделать многоязычный сайт
        // Для примера : const words = { validationLenght: 'Должно быть от 2 до 30 символов'	} 
        // Далее words передаётся в функцию и используется.
        this.popupErrorName.textContent = this.words.ru.NoLimit;
      }
    };
  
    checkLinkInputSecond() {
      //     /** REVIEW: Можно лучше:
      //     *   Можно упростить if/else до: return link.startsWith('http')
      //     **/
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
      // здесь можно сделать несколько переносов строки. 
      // такие сложные условия очень тяжело анализировать
      if (this.checkInputFirstValidityLimitInfo() === true && this.checkInputFirstValidityNoInfo() === true && this.checkInputSecondValidityNoInfo() === true && this.checkLinkInputSecond() === true) {
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
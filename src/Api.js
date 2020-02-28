class Api {
    constructor(options) {
        this.options = options;


    }
    getInitialUserInfo() {
        return fetch(`${this.options.baseUrl}/users/me`, {
            headers: {
                authorization: this.options.headers.authorization
            }
        })
            .then((res) => {
                if (res.ok) return res.json();
                return res.status;
            })
            //  Надо исправить: Необходимо в метод добавить обработку ошибок  
            .catch((err) => {
                console.log(err);
            });

    }
    getInitialCards() {
        return fetch(`${this.options.baseUrl}/cards`, {
            headers: {
                authorization: this.options.headers.authorization
            }
        })

            .then((res) => {
                if (res.ok) return res.json();
                return res.status;
            })
            //  Надо исправить: Необходимо в метод добавить обработку ошибок
            .catch((err) => {
                console.log(err);
            });
    }
    editUserInfo(userName, userInfo) {
        this.userName = userName;
        this.userInfo = userInfo;
        return fetch(`${this.options.baseUrl}/users/me`, {
            method: 'PATCH',
            headers: {
                authorization: this.options.headers.authorization,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: userName.value,
                about: userInfo.value

            })
        })
            .then((res) => {
                if (res.ok) return res.json();
                return res.status;
            })
            //  Надо исправить: Необходимо в метод добавить обработку ошибок
            .catch((err) => {
                console.log(err);
            });
    }
}

    // другие методы работы с API

/**
* Здравствуйте.
 * Самый правильный способ, как пример указан в брифе
 *
 *     Надо исправить: Для реализации вы создавали в прошлом спринте отдельные классы.
   *  Не переносите и не дублируйте реализацию в  класс Api, С класса можно только возвращать данные
   *  Которые получены от сервера. Это надо удалить
   *  Надо возвращать просто данные и за одно преобразовать в нужный формат
   * .then(res => { if (res.ok) { return res.json();   } })
   *
 *
 * Вызывать   методы класса Api лучше из других классов
 *
 * Стоит отметить, что реализации в классе API быть не должно. Точнее прямого взаимодействия. Методы могут вызываться
 * из других классов и возвращать данные, а работа с этими данными должны быть непосредственно в классах создаваемых в 8 спринте
*

    * Класс Api это отдельный класс который ничего не знает о других классах и методах
    * Вы можете только получать данные из этого класса и использовать эти данные.
    * Представьте, что я дам Вам другой класс(допустим DataBase) к внутренностям которого вы не будете иметь доступ и даже прочитать этот файл не сможете
    * скажу что у него есть несколько методов  getInitialCards deleteCard addCard, editUserInfo, setUserInfo и так далее
    * Который только возвращает данные, а вы можите получить только обращась к этим методам.
    * Соответственно в классе нельзя реализовать такие методы как querySelector или обратиться к другому классу, а только обратитьсяк методам.
    * Отдельная обязанность. Таким же способом Вы обращаетесь к серверу. Вы не знаете, что на сервере, даже язык программирования, но вы знаете методы
    * к которым обращаетесь и способ обращения. Это и есть обязанность отдельного класса.
    *
    *
    * Надо исправить: Так же если отключить интернет и попытаться изменить профиль, профиль затирается, что происходить не должно
    *
    *
 * работа принимается только при исправлении всех "Надо исправить"
 *
*/
/**
 * Здравствуйте
 * Надо исправить:  Вам надо добавить обработку ошибок в catch, посмотрите в брифе...
 *
 * Работа принимается
 *
 */

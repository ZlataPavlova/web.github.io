//переменные
const newProfile = document.forms.newProfile;
const userName = newProfile.elements.userName;
const userInfo = newProfile.elements.userInfo;
const placesList = document.querySelector('.places-list');
const popup = document.querySelector('.popup');
const infoButton = document.querySelector('.user-info__button');
const popupClose = document.querySelector('.popup__close');
const popupCloseEdit = document.querySelector('.popup__close_edit');
const editButton = document.querySelector('.user-info__button_edit');
const popupEdit = document.querySelector('.popup__edit');
const Image = document.querySelector('.image');
const popupImage = document.querySelector('.popup__image');
const popupCloseImage = document.querySelector('.popup__close_image');

const UserInfoName = document.querySelector('.user-info__name')
const UserInfoJob = document.querySelector('.user-info__job')

const form = document.querySelector('.popup');
const words = {
  ru:
  {
    NoName: 'Это обязательное поле',
    NoLimit: 'Должно быть от 2 до 30 символов',
    NoLink: 'Здесь должна быть ссылка'
  }
};
const container = document.querySelector('.places-list');// место куда записывать карточки
const cards = [];

const popupButtonEdit = document.querySelector('.popup__button_edit');
const popupErrorUserName = document.querySelector('.popup__error_userName');
const popupErrorUserInfo = document.querySelector('.popup__error_userInfo');

const formCard = document.forms.new;
const name = formCard.elements.name;
const link = formCard.elements.link;

const popupErrorName = document.querySelector('.popup__error_name');
const popupErrorLink = document.querySelector('.popup__error_link');
const popupButton = document.querySelector('.popup__button');


//вызовы классов
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
const api = new Api({
  baseUrl: 'http://95.216.175.5/cohort7',
  headers: {
    authorization: '902aa8bb-c488-4b00-a56a-c00ae30113ec',
    'Content-Type': 'application/json'
  }
});
api.getInitialCards().then((result) => {

  cardList.render(container, result)
})
api.getInitialUserInfo().then((result) => {

  UserInfoName.textContent = result.name;
  UserInfoJob.textContent = result.about;
})

const card = new Card();
const cardList = new CardList(card, container);
// какой смысл вызывать здесь render

const validationUserInfo = new FormValidatorUserInfo(words, popupErrorUserName, popupErrorUserInfo);
const validationCard = new FormValidatorCard(words, popupErrorName, popupErrorLink);
const popupOpenCard = new PopupCard(popup, infoButton, popupClose, popupButton, formCard, validationCard);
const popupOpenEdit = new PopupUserProfile(popupEdit, editButton, popupCloseEdit, userName, userInfo, popupButtonEdit, UserInfoName, UserInfoJob, validationUserInfo, api);
const popupOpenImage = new Popup(popupImage, placesList, popupCloseImage);

//слушатель который запускает метод addCard при перезагрузке формы добавления новой карточки
formCard.addEventListener('submit', function (event) {
  event.preventDefault();
  const form = document.forms.new;
  cardList.addCard(form.elements.name.value, form.elements.link.value);
  form.reset();
  popupOpenCard.closeFormCard();

});

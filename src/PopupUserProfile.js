import {Popup} from './Popup';
import {validationUserInfo} from './FormValidatorUserInfo';

 export class PopupUserProfile extends Popup {
  constructor(popup, popupButtonOpen, popupButtonClose, userName, userInfo, button,  UserInfoName, UserInfoJob, validationUserInfo, api) {
    super(popup, popupButtonOpen, popupButtonClose);
    this.userName = userName;
    this.userInfo = userInfo;
    this.button = button;
    this.UserInfoName=UserInfoName;
    this.UserInfoJob=UserInfoJob;
    this.validationUserInfo= validationUserInfo;
    this.api=api;
    this.popupButtonOpen.addEventListener('click', this.openProfile.bind(this));
    this.popup.addEventListener('submit', this.editProfile.bind(this));
    this.popup.addEventListener('submit', this.createProfile.bind(this));
    this.popup.addEventListener('input', this.validation.bind(this));
  }
  openProfile() {
    this.api.getInitialUserInfo().then((result) =>{
     
      this.userName.value = result.name;
      this.userInfo.value = result.about;
      }) 
    
  };

  editProfile() {
    event.preventDefault();
    this.api.editUserInfo(this.userName.value, this.userInfo.value)  
  }
  
  createProfile() {
    this.api.editUserInfo(this.userName, this.userInfo).then((result) =>{
     
      this.UserInfoName.textContent = result.name;
      this.UserInfoJob.textContent = result.about;
      }) 
   
    super.closeFormCard();
  }
  //метод для проверки данных введеных в форму редактирования профиля
  validation() { 
    this.popup.addEventListener('input', this.validationUserInfo.setEventListeners(this.userName, this.userInfo));
    this.popup.addEventListener('input', this.validationUserInfo.setSubmitButtonState(this.button));

  }
}
class PopupUserProfile extends Popup {
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
    // Правильно что используете  event.preventDefault();
    event.preventDefault();
    
    this.api.editUserInfo(userName.value, userInfo.value)
    
    
  }
  
  createProfile() {
    api.editUserInfo(userName, userInfo).then((result) =>{
     
      this.UserInfoName.textContent = result.name;
      this.UserInfoJob.textContent = result.about;
      }) 
   
    super.closeFormCard();
  }
  //метод для проверки данных введеных в форму редактирования профиля
  validation() {
    /** Надо исправить: вы обращаетесь в классе к переменной alidationUserInfo объявленной глобально,
    так делать нельзя. Вы можете передать эту переменную в качестве параметров, а потом уже обращаться к ней 
    Стремитесь к тому чтобы класс у вас был самодостаточным, и не зависел от глобальных переменных или классов 
    объявленных глобально, а только от тех данных которые были переданны через параметры 
    */
   
    this.popup.addEventListener('input', this.validationUserInfo.setEventListeners(this.userName, this.userInfo));
    this.popup.addEventListener('input', this.validationUserInfo.setSubmitButtonState(this.button));

  }
}
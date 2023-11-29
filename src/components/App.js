import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';




function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }


  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }


  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard(null);
  }



  return (
    <div className="page">
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick} 
        />
      <Footer />
      <PopupWithForm
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        id={'popup-edit'}
        form={'profiel-edit'}
        title={'Редактировать профиль'}
        buttonText={'Сохранить'}
        children={(
          <>
            <div className="popup__field">
              <input id="popup__edit-name-input"
                className="popup__input"
                type="text"
                minLength="2"
                maxLength="40"
                name="name"
                placeholder="Имя"
                required="" />
              <span className="popup__edit-name-input-error popup__input-error" />
            </div>
            <div className="popup__field">
              <input
                id="popup__edit-about-input"
                className="popup__input"
                type="text"
                minLength="2"
                maxLength="200"
                name="about"
                placeholder="О себе"
                required="" />
              <span className="popup__edit-about-input-error popup__input-error" />
            </div>
          </>
        )}
      />

      <PopupWithForm
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        id={'popup-add'}
        form={'card-create'}
        title={'Новое место'}
        buttonText={'Создать'}
        children={(
          <>
            <div className="popup__field">
              <input
                id="popup__add-name-input"
                className="popup__input"
                type="text"
                minLength="2"
                maxLength="30"
                name="name"
                placeholder="Название"
                required=""
              />
              <span className="popup__add-name-input-error popup__input-error" />
            </div>
            <div className="popup__field">
              <input
                id="popup__add-link-input"
                className="popup__input"
                type="url"
                name="link"
                placeholder="Ссылка на картинку"
                required=""
              />
              <span className="popup__add-link-input-error popup__input-error" />
            </div>
          </>
        )}
      />

      <PopupWithForm
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        id={'popup-add-avatar'}
        form={'card-create'}
        title={'Обновить аватар'}
        buttonText={'Создать'}
        children={(
          <>
            <div className="popup__field">
              <input
                id="popup__add-avatar-link-input"
                className="popup__input"
                type="url"
                name="link"
                placeholder="Ссылка на картинку"
                required=""
              />
              <span className="popup__add-avatar-link-input-error popup__input-error" />
            </div>
          </>
        )}
      />
      <ImagePopup
        card={selectedCard}
        onClose={closeAllPopups}
      />
    </div>
  );
}

export default App;

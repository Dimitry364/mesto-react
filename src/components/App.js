import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import TextField from "./TextField";
import UrlField from "./UrlField";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    React.useState(false);
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
        id={"popup-edit"}
        form={"profiel-edit"}
        title={"Редактировать профиль"}
        buttonText={"Сохранить"}
        
        // не понял, что имеете ввиду и как это реализовать, сделал пока так, но не уверен
        children={
          <>
            <TextField
              id="popup__edit-name-input"
              maxLength="40"
              name="name"
              placeholder="Имя"
            />
            <TextField
              id="popup__edit-about-input"
              maxLength="200"
              name="about"
              placeholder="О себе"
            />
          </>
        }
      />

      <PopupWithForm
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        id={"popup-add"}
        form={"card-create"}
        title={"Новое место"}
        buttonText={"Создать"}
        children={
          <>
            <TextField
              id="popup__add-name-input"
              maxLength="30"
              name="name"
              placeholder="Название"
            />
            <UrlField id="popup__add-link-input" />
          </>
        }
      />

      <PopupWithForm
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        id={"popup-add-avatar"}
        form={"card-create"}
        title={"Обновить аватар"}
        buttonText={"Создать"}
        children={<UrlField id="popup__add-avatar-link-input" />}
      />
      <ImagePopup card={selectedCard} onClose={closeAllPopups} />
    </div>
  );
}

export default App;

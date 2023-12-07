function PopupWithForm(props) {
  return (
    <div
      className={`popup ${props.isOpen && `popup_opened`}`}
      id={`${props.id}`}
      onClick={props.onCloseClick}
    >
      <div className="popup__container">
        <form
          className="popup__form"
          action="#"
          name={props.form}
          onSubmit={props.onSubmit}
        >
          <h2 className="popup__title">{props.title}</h2>
          <fieldset className="popup__fieldset">
            {props.children}
            <button
              className={`popup__button ${
                props.disabled && `popup__button_disabled`
              }`}
              name="submit"
              type="submit"
              disabled={props.disabled}
              onClick={props.onClick}
              title={props.buttonText}
            >
              {props.buttonText}
            </button>
          </fieldset>
          <button
            className="popup__cancel-button"
            type="button"
            onClick={props.onClose}
          />
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;

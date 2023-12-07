import React from "react";

function PopupWithForm(props) {

  React.useEffect(() => {
    if (props.isOpen) {
      document.addEventListener('mousedown', props.onCloseClickOverlay);
    } else {
      document.removeEventListener('mousedown', props.onCloseClickOverlay);
    }
  }, [props.isOpen])

  return (
    <div
      className={`popup ${props.isOpen && `popup_opened`}`}
      id={`${props.id}`}
      onClick={props.onCloseClickOverlay}
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
              className="popup__button"
              name="submit"
              type="submit"
              title={props.submitButtonAdd}
            >
              {props.onPlaceLoading ? props.submitButtonLoading : props.submitButtonAdd}
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

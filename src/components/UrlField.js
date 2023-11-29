function UrlField(props) {
  return (
    <>
      <div className="popup__field">
        <input
          id={props.id}
          className="popup__input"
          type="url"
          name="link"
          placeholder="Ссылка на картинку"
          required
        />
        <span className={`${props.id}-error popup__input-error`} />
      </div>
    </>
  );
}

export default UrlField;

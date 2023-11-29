function TextField(props) {
  return (
    <>
      <div className="popup__field">
        <input
          id={props.id}
          className="popup__input"
          type="text"
          minLength="2"
          maxLength={props.maxLength}
          name={props.name}
          placeholder={props.placeholder}
          required
        />
        <span className={`${props.id}-error popup__input-error`} />
      </div>
    </>
  );
}

export default TextField;

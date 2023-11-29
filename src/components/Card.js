function Card(props) {

    function handleClick() {
        props.onCardClick(props.card);
    }

    return (
        <li className="element">
            <img className="element__image" src={props.card.link} alt={props.card.name} onClick={handleClick} />
            <button className="element__delete-button" type="button" title="Удалить" />
            <div className="element__info">
                <h2 className="element__caption">{props.card.name}</h2>
                <div className="element__like-container">
                    <button className="element__like-button" type="button" title="Нравится" />
                    <h3 className="element__like-counter">{props.likes}</h3>
                </div>
            </div>
        </li>
    )
}

export default Card;
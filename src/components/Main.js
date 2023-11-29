import React from 'react';
import api from '../utils/Api';
import Card from './Card';

function Main(props) {
    const [userInfo, setUserInfo] = React.useState('');
    const [cards, setCards] = React.useState([]);

    React.useEffect(() => {
        api.getInitialData().then(([userData, initialCardsData]) => {
            setUserInfo(userData);
            setCards(initialCardsData);
        }).catch((err) => {
            console.log(err);
        });

    }, [])

    return (
        <main className="content">
            <section className="profile">
                <div className="profile__container">
                    <div className="profile__img-mask">
                        <button
                            className="profile__avatar-edit"
                            type="button"
                            title="Обновить аватар"
                            onClick={props.onEditAvatar}
                        />
                        <img
                            className="profile__avatar"
                            alt="Аватар"
                            src={userInfo.avatar}
                        />
                    </div>
                    <div className="profile__info">
                        <div className="profile__info-container">
                            <h1 className="profile__name">
                                <span className="profile__span">{userInfo.name}</span>
                            </h1>
                            <button
                                className="profile__edit-button"
                                type="button"
                                title="Редактировать профиль"
                                onClick={props.onEditProfile}
                            />
                        </div>
                        <p className="profile__about">{userInfo.about}</p>
                    </div>
                </div>
                <button
                    className="profile__add-button"
                    type="button"
                    title="Добавить фотографию"
                    onClick={props.onAddPlace}
                />
            </section>
            <section className="elements">
                <ul className="elements__list">
                    {cards.map((initialCardsData, i) => (
                        <Card
                            key={i}
                            card={initialCardsData}
                            likes={initialCardsData.likes.length}
                            onCardClick={props.onCardClick}
                        />

                    ))}
                </ul>
            </section>
        </main>
    )
}

export default Main;
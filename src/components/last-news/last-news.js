import React from 'react';
import './last-news.css';
import Image from '../../assets/img/messi.jpg';

const list = [
    {
        "id":"1",
        "title":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fringilla interdum...",
        "img":Image
    },
    {
        "id":"3",
        "title":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fringilla interdum...",
        "img":Image
    },
    {
        "id":"4",
        "title":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fringilla interdum...",
        "img":Image
    }
];

const News = list.map( (news) =>
    <li className="news-item" key={news.toString()}>
        <img src={news.img} className="character-img" alt={news.id} />
        <p>{news.title}</p>
    </li>
);

export const LastNews = () => {
    return (
        <div className="last-news">
            <p className="title">Últimas Noticias de espectáculos</p>
            <ul>
                {News}
            </ul>
        </div>
    );
}
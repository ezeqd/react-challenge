import React from 'react';
import './suggestions.css';
import Image from '../../assets/img/messi.jpg';

const list = [
    {
        "url":"#",
        "image": Image,
        "title":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fringilla interdum..."
    },
    {
        "url":"#",
        "image": Image,
        "title":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fringilla interdum..."
    }
];

const Suggestion = list.map((suggestion) =>
    <li className="suggestion">
        <a href={suggestion.url}>
            <img src={suggestion.image} className="suggestion-img" alt="suggestion" />
        </a>
        <p>{suggestion.title}</p>
    </li>
);

export const Suggestions = () => {
    return (
        <div className="suggestions">
            <p className="title">Lo recomendado para vos</p>
            <ul>
                {Suggestion}
            </ul>
        </div>
    );
}
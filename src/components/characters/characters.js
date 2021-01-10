import React from 'react';
import './characters.css';
import Img1 from '../../assets/img/pelado-lopez.png';
import Img2 from '../../assets/img/marcela-tauro.png';
import Img3 from '../../assets/img/guillermo-coppola.png';
const list = [
    {
        "name":"Pelado Lopez",
        "image":Img1,
    },
    {
        "name":"Marcela Tauro",
        "image":Img2,
    },
    {
        "name":"Guillermo Coppola",
        "image":Img3,
    }
];

const Character = list.map( (character) =>
    <li className="character" key={character.toString()}>
        <div className="col-1">
            <p className="character-name">{character.name}</p>
        </div>
        <div className="col-2">
            <img src={character.image} className="character-img" alt={character.name} />
            <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fringilla interdum...</p>
        </div>
    </li>
);

export const Characters = () => {
    return (
        <div className="characters">
            <p className="title">Nuestras Figuras</p>
            <ul>
                {Character}
            </ul>
        </div>
    );
}
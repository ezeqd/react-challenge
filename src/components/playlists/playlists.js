import React from 'react';
import './playlists.css'
import Image from '../../assets/img/playlist.jpg';

const list = [
    {
        "image": Image,
        "url":"#",
    },
    {
        "image": Image,
        "url":"#",
    },
    {
        "image": Image,
        "url":"#",
    },
    {
        "image": Image,
        "url":"#",
    },
    {
        "image": Image,
        "url":"#",
    },
];

const Playlist = list.map( (playlist) =>
    <li className="playlist" key={playlist.toString()}>
        <a href={playlist.url}>
            <img src={playlist.image} className="playlist-img" alt="playlist" />
        </a>
        
    </li>
);

export const Playlists = () => {
    return (
        <div className="playlists">
            <p className="title">¿Qué querés escuchar?</p>
            <ul>
                {Playlist}
            </ul>
            <a className="more-playlist" href="#">Ver más</a>
        </div>
    );
}
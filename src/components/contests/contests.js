import React from 'react';
import './contests.css';
import Image from '../../assets/img/messi.jpg';
import Button from '@material-ui/core/Button';

const list = [
    {
        "url":"#",
        "image":Image,
        "desc":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fringilla interdum..."
    },
    {
        "url":"#",
        "image":Image,
        "desc":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fringilla interdum..."
    },
    {
        "url":"#",
        "image":Image,
        "desc":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fringilla interdum..."
    }
];

const Contest = list.map((contest) =>
    <li className="contest">
        <div className="col-1">
            <img src={contest.image} className="contest-img" alt="contest" />
        </div>
        <div className="col-2">
            <p>{contest.desc}</p>
            <Button variant="contained" className="contest-submit" href={contest.url} color="primary">
                Participar
            </Button>
        </div>   
    </li>
);

export const Contests = () => {
    return (
        <div className="contests">
            <p className="title">Concursos</p>
            <ul>
                {Contest}
            </ul>
        </div>
    );
}
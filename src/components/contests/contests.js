import React from 'react';
import image from '../../assets/img/messi.jpg';
import Button from '@material-ui/core/Button';

export const contests = () => {
    return (
        <div className="contest">
            <img src={image} className="contest-img" alt="contest image" />
            <p>lorem ipsum</p>
            <Button variant="contained" color="primary">
                Participar
            </Button>
        </div>
    )
}
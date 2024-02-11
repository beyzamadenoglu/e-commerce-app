'use client'

import { useState } from 'react';
import MuiRating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

const getRandomNumber = () => {
    return Math.floor(Math.random() * 5) + 1;
}

const RatingComponent = () => {

    const [value, setValue] = useState(getRandomNumber());

    return (
        <>
            <Typography component="legend">Controlled</Typography>
            <MuiRating
                name="simple-controlled"
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
            />
        </>
    );
}

export default RatingComponent;

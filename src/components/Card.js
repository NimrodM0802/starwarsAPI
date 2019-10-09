import React from 'react';


const Card = ({ name,height,mass,hairColor,skinColor,eyeColor,birthYear,gender }) => {
    return (
        <div className='tl bg-lightest-blue dib br3 pa3 ma2 grow bw2 shadow-5'>
        
            <div>
                <h4>Name: {name}</h4>
                <p>Height: {height}</p>
                <p>Mass: {mass}</p>
                <p>Hair Color: {hairColor}</p>
                <p>Skin Color: {skinColor}</p>
                <p>Eye Color: {eyeColor}</p>
                <p>Birth Year: {birthYear}</p>
                <p>Gender: {gender}</p>
            </div>
        </div>
    );
}

export default Card;
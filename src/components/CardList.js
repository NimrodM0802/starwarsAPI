import React from 'react';
import Card from './Card';

const CardList = ({actors}) => {
    return (
        <div>
            {
                actors.map((user, i) => {
                    return (
                        <Card 
                            key={i} 
                            name={actors[i].name} 
                            height={actors[i].height}
                            mass={actors[i].mass}
                            hairColor={actors[i].hair_color}
                            skinColor={actors[i].skin_color}
                            eyeColor={actors[i].eye_color}
                            birthYear={actors[i].birth_year}
                            gender={actors[i].gender}   
                        />
                    );
                })
            }   
        </div>
    );
}

export default CardList;
import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon }  from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

export const FavoriteCard = ({ item, onDelete}) => {
    
    const [favored, setFavored] = useState(true);

    //update favorite component
    const updateFavorites = () => {
        //here thet favored state is toggled 
        setFavored(!favored);
    }

    useEffect(() => {
        if(!favored)
            onDelete(item);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [favored, onDelete]);

    return (
        <div className = 'card' key = {item.id} >
            <FontAwesomeIcon icon = {faStar} className = {favored ? 'star favored' : 'star'} onClick = {() => updateFavorites()}/>
            <div className = 'card-info'>
                <img src = {item.image_url} alt = '' style = {{height: '15rem', width: '5rem'}}/>
                <div>
                    <h3>{item.name}</h3>
                    <p className = "description">{item.description}</p>
                </div>
            </div>
        </div>
    )
}

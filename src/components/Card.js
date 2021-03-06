import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon }  from '@fortawesome/react-fontawesome'
import { faStar} from '@fortawesome/free-solid-svg-icons'

export const Card = ({ item, addOn, onDelete, favorites }) => {
    //flags if the star was clicked or not
    const findInFavorites = () => {
        if(!favorites) return false; 
        const found = favorites.find(cur => (cur.id === item.id) && (cur.name === item.name));
        if(found) return true;
        return false;
    }

    const [favored, setFavored] = useState(() => {
        return findInFavorites();
    });

    //update favorite component
    const updateFavorites = () => {
        //here thet favored state is toggled 
        setFavored(!favored);
    }

    useEffect(() => {
        if(favored){
             addOn(item);
         }else{
             onDelete(item);
         };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [favored, findInFavorites]);

    return (
        <div className = 'card' key = {item.id} >
            <FontAwesomeIcon icon = {faStar} className = {favored ? 'star favored' : 'star'} onClick = {(e) => updateFavorites()}/>
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

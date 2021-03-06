import React from 'react'
import { FavoriteCard } from './FavoriteCard'

export const FavoriteGrid = ({ favorites, onDelete }) => {
    return (
        <>
            <div className = 'favorite-title'>Favorites</div>
            <section className = 'cardGrid'>
                {favorites.map((item) => 
                    <FavoriteCard key = {item.id} item = {item} onDelete = {onDelete}/>
                )}
            </section>
        </>
    )
}
   
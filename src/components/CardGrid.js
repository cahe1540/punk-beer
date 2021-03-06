import React from 'react'
import { Card } from './Card'

export const CardGrid = ({ items, addOn, onDelete, favorites }) => {
    return (
        <section className = 'cardGrid'>
            {items.map((item) => 
                <Card 
                    key = {item.id} 
                    item = {item} 
                    addOn = {addOn} 
                    onDelete = {onDelete} 
                    favorites = {favorites} 
                />
            )}
        </section>
    )
}

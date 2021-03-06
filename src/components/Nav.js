import React from 'react'

export const Nav = () => {
    return (
        <section className = 'nav'>
             <h3 className = 'title'><a href='/'>Beans Love Beer</a></h3>
             <ul className = 'nav-menu'>
                <li><a href = '/'>Home</a></li>
                <li><a href = '/favorites'>Favorites</a></li> 
             </ul>
        </section>
    )
}

import React from 'react'
import { Link } from 'react-router-dom'

export const Nav = () => {
    return (
        <section className = 'nav'>
             <h3 className = 'title'><Link to='/'>Beans Love Beer</Link></h3>
             <ul className = 'nav-menu'>
                <li><Link to= "/">Home</Link></li>
                <li><Link to= "/favorites">Favorites</Link></li> 
             </ul>
        </section>
    )
}

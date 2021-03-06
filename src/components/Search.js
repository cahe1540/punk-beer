import React from 'react'

export const Search = ({ getQuery }) => {    
    const onChange = (q) => {
        getQuery(q);
    }

    return (
        <section className = 'searchArea'>
            <input type = 'text' placeholder = '   Search for beer...' onChange = { (e) => {onChange(e.target.value)}}></input>
            <button>Search</button>
        </section>
    )
}

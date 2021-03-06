import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom' 
import axios from 'axios'
import './App.css'
import { Nav } from './components/Nav'
import { Search } from './components/Search'
import { CardGrid } from './components/CardGrid'
import { FavoriteGrid } from './components/FavoriteGrid'

function App() {
  const initialFav = JSON.parse(localStorage.getItem('favorites')) || [];
  const [items, setItems ] = useState([]);
  const [ favorites, setFavorites] = useState(initialFav);
  const [query, setQuery] = useState('');
  
  //add a new favorite
  const addFavorite = (item) => {
    if(favorites.find(el => el.id === item.id)) return;
    setFavorites([...favorites, item]);
  }

  //delete a favorite if it exists
  const deleteFavorite = (item) => {
    if(favorites.find(el => el.id === item.id))
      setFavorites(favorites.filter(cur => cur.id !== item.id));
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const storeFavorites = () => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }
  
  useEffect(() => {
    const fetchData = async () => {
      let request = query === '' ? 'beers': `beers?beer_name=${query}`;
      try{
        const req = await axios(`https://api.punkapi.com/v2/${request}`); 
        setItems(req.data);
      }catch(err) {
        console.log(err);
      }
    }
    setFavorites(favorites);
    storeFavorites();
    fetchData();
  },[query, favorites, storeFavorites, setItems]);

  return (
    <Router>
      <Nav />
      <Route path = "/" exact render = {() => (
        <div className="App">
          <Search getQuery = {(q) => {setQuery(q)}}/>
          <div className = "container">
            <CardGrid items = {items} addOn = {addFavorite} onDelete = {deleteFavorite} favorites = {favorites}/>
          </div>
        </div>
      )} />
      <Route path = "/favorites" exact render = { () => (
        <div className = "container">
          <FavoriteGrid favorites = {favorites} onDelete = {deleteFavorite}/>
        </div>
      ) }
      />
    </Router>
  );
}

export default App;

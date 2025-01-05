import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Store from './pages/Store';
import Nav from './components/Nav/Nav';
import Error from './pages/Error';
import { FaArrowAltCircleUp } from 'react-icons/fa';
import CartPage from './pages/Cart';
import FavoritesPage from './pages/Favorites';
import Login from './pages/Login';
import PC from './pages/PC';
import Admin from './pages/Admin';
import Pinkod from './pages/Pinkod';

const App = () => {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/PC' element={<PC/>} />
        <Route path='/store' element={<Store />} />
        <Route path='/shop' element={<CartPage />} />
        <Route path='/fav' element={<FavoritesPage />} />
        <Route path='*' element={<Error />} />
        <Route path='/login' element={<Login/>} />
        <Route path='/admin' element={<Admin/>} />
        <Route path='/pinkod' element={<Pinkod/>} />
      </Routes>
      <a href='#top' className='fixed_btn'>
        <FaArrowAltCircleUp />
      </a>
    </div>
  );
};

export default App;

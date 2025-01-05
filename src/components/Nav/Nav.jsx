import React from 'react';
import './nav.scss';
import { Link } from 'react-router-dom';
import { FaRegHeart } from 'react-icons/fa6';
import { FaOpencart } from 'react-icons/fa';
import { useCart } from 'react-use-cart';
import { useFavoritesContext } from '../../context/FavoritesContext';

const Nav = () => {
  const { totalUniqueItems } = useCart();
  const { totalItems } = useFavoritesContext();

  function LogOut() {
    localStorage.removeItem('Name')
    localStorage.removeItem('Tel')
    window.location.href = '/login'
  }

  return (
    <>
      <nav>
        <div className='container'>
          <div className='n_main'>
            <img
              src='https://razer-shop.netlify.app/static/media/razer-ths-logo.0d25071aa9e861bf55d7f240475a2ff1.svg'
              alt=''
            />
            <div className='links'>
              <Link to={'/pc'}>PC</Link>
              <Link to={'/mobile'}>Mobile</Link>
              <Link to={'/'}>Home</Link>
              <Link to={'/store'}>Store</Link>
              {localStorage.getItem('Tel') ? (
                <button onClick={() => LogOut()}>Log Out</button>
              ):(
                <Link to={'/login'}>Login</Link>
              )}
            </div>
            <div className='icons'>
              <Link to={'/fav'}>
                <FaRegHeart />
                <sub>{totalItems}</sub>
              </Link>
              <Link to={'/shop'}>
                <FaOpencart />
                <sub>{totalUniqueItems}</sub>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;

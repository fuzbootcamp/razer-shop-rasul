import React from 'react';
import './categories.scss';
import { Link } from 'react-router-dom';

const Categories = () => {
  return (
    <div>
      <div className='container'>
        <div className='categories'>
          <a href='#laptops' className='box'>
            <img
              src='https://razer-shop.netlify.app/static/media/Laptop.d5c74f1ada69752ebf4a.png'
              alt=''
            />
            <p>Laptops</p>
          </a>
          <a href='#/mice' className='box'>
            <img
              src='https://razer-shop.netlify.app/static/media/Mice.4dc6e8d4c1c2e7c1a850.png'
              alt=''
            />
            <p>Mice</p>
          </a>
          <a href='#keyboards' className='box'>
            <img
              src='https://razer-shop.netlify.app/static/media/Keyboards.cc6728540732d34de418.png'
              alt=''
            />
            <p>Keyboards</p>
          </a>
          <a href='#headsets' className='box'>
            <img
              src='https://razer-shop.netlify.app/static/media/Headsets.055c7381a2db316c6b06.png'
              alt=''
            />
            <p>Headsets</p>
          </a>
          <a href='#streaming' className='box'>
            <img
              src='https://razer-shop.netlify.app/static/media/stream.eac9b2d0384dfb7ddb48.png'
              alt=''
            />
            <p>Streaming</p>
          </a>
          <a href='#chairs' className='box'>
            <img
              src='https://razer-shop.netlify.app/static/media/Chairs.4374138c3b8091b28574.png'
              alt=''
            />
            <p>Chairs</p>
          </a>
          <a href='#console' className='box'>
            <img
              src='https://razer-shop.netlify.app/static/media/console.222c8f89eb05c3c6d219.png'
              alt=''
            />
            <p>Console</p>
          </a>
          <a href='#mobile' className='box'>
            <img
              src='https://razer-shop.netlify.app/static/media/c-mobile.02115c644944a6e01634.png'
              alt=''
            />
            <p>Mobile</p>
          </a>
          <a href='#gear' className='box'>
            <img
              src='https://razer-shop.netlify.app/static/media/Gear.3497e9ce0031c997e830.png'
              alt=''
            />
            <p>Gear</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Categories;

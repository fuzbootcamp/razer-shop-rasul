import React, { useEffect, useState } from 'react';
import Categories from '../components/Categories/Categories';
import axios from 'axios';
import Loading from '../components/Loading';

import ProductCard from '../components/ProductCard';

const Store = () => {
  const [devices, setDevices] = useState([]);

  const mice = devices?.filter((el) => el.category === 'MICE');
  const laptops = devices?.filter((el) => el.category === 'Laptop');
  const keyboards = devices?.filter((el) => el.category === 'Keyboards');
  const headsets = devices?.filter((el) => el.category === 'Headsets');
  const streaming = devices?.filter((el) => el.category === 'Streaming');
  const chairs = devices?.filter((el) => el.category === 'Chairs');
  const mobile = devices?.filter((el) => el.category === 'Mobile');
  const gear = devices?.filter((el) => el.category === 'Gear');
  const console = devices?.filter((el) => el.category === 'Console');

  useEffect(() => {
    axios
      .get('https://razer-api.onrender.com/devices')
      .then((res) => {
        setDevices(res.data);
      })
      .catch((err) => alert(err));
  }, []);

  if (!devices.length) return <Loading />;

  return (
    <>
      <Categories />
      <div className='container'>
        <div className='store'>
          <h1 id='mice'>MICE BY RAZER</h1>
          <div className='store_wrapper'>
            {mice.map((el) => {
              return <ProductCard key={el._id} el={el} />;
            })}
          </div>
          <h1 id='laptops'>LAPTOPS BY RAZER</h1>
          <div className='store_wrapper'>
            {laptops.map((el) => {
              return <ProductCard key={el._id} el={el} />;
            })}
          </div>
          <h1 id='keyboards'>KEYBOARDS BY RAZER</h1>
          <div className='store_wrapper'>
            {keyboards.map((el) => {
              return <ProductCard key={el._id} el={el} />;
            })}
          </div>
          <h1 id='headsets'>HEADSETS BY RAZER</h1>
          <div className='store_wrapper'>
            {headsets.map((el) => {
              return <ProductCard key={el._id} el={el} />;
            })}
          </div>
          <h1 id='streaming'>STREAMING BY RAZER</h1>
          <div className='store_wrapper'>
            {streaming.map((el) => {
              return <ProductCard key={el._id} el={el} />;
            })}
          </div>
          <h1 id='chairs'>CHAIRS BY RAZER</h1>
          <div className='store_wrapper'>
            {chairs.map((el) => {
              return <ProductCard key={el._id} el={el} />;
            })}
          </div>
          <h1 id='console'>CONSOLE BY RAZER</h1>
          <div className='store_wrapper'>
            {console.map((el) => {
              return <ProductCard key={el._id} el={el} />;
            })}
          </div>
          <h1 id='mobile'>MOBILE BY RAZER</h1>
          <div className='store_wrapper'>
            {mobile.map((el) => {
              return <ProductCard key={el._id} el={el} />;
            })}
          </div>
          <h1 id='gear'>GEAR BY RAZER</h1>
          <div className='store_wrapper'>
            {gear.map((el) => {
              return <ProductCard key={el._id} el={el} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Store;

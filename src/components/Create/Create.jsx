import React, { useState } from 'react';
import './create.scss';
import axios from 'axios';

const Create = () => {
  const [name, setName] = useState('Name');
  const [image, setImage] = useState('https://via.placeholder.com/600/24f355');
  const [price, setPrice] = useState(0);
  const [desc, setDesc] = useState('Description');
  const [category, setCategory] = useState('Category');

  function createRazer(e) {
    e.preventDefault();
    axios
      .post('https://razer-api.onrender.com/devices', {
        name: name,
        image: image,
        price: price,
        desc: desc,
        category: category,
      })
      .then(() => {
        alert(`Yengi ${name} dgan device qo'shildi!`);
        window.location.reload();
      })
      .catch((err) => alert(err));
  }

  return (
    <div>
      <div className='container'>
        <div className='create_wrap'>
          <div className='create_left'>
            <form onSubmit={createRazer}>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type='text'
                placeholder='name...'
                required
              />
              <input
                value={image}
                onChange={(e) => setImage(e.target.value)}
                type='text'
                placeholder='image...'
                required
              />
              <input
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                type='number'
                placeholder='price'
                required
              />
              <input
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
                type='text'
                placeholder='desc'
                required
              />
              <input
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                type='text'
                placeholder='category'
                required
              />
              <button type='submit'>Create Razer</button>
            </form>
          </div>
          <div className='create_right'>
            <div className='c_card'>
              <h3>{category}</h3>
              <img src={image} alt='' />
              <p>{name}</p>
              <b>{price} $</b>
              <br />
              <h6>{desc}</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Create;

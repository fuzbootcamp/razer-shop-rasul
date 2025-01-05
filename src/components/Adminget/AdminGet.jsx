import React, { useEffect, useState } from 'react';
import './adminGet.scss';
import axios from 'axios';

const AdminGet = ({searchFilter}) => {


  function deleteRazer(_id) {
    axios
      .delete(`https://razer-api.onrender.com/devices/${_id}`)
      .then(() => {
        alert(`${_id}:tovar delete bo'ldi!`);
        window.location.reload();
      })
      .catch((err) => alert(err));
  }


  return (
    <div>
      <div className='container'>
        <div className='admin_wrap'>
          {searchFilter.map((el) => {
            return (
              <div className='card'>
                <i>{el.category}</i>
                <br />
                <img src={el.image} alt='' />
                <p>{el.name}</p>
                <button onClick={() => deleteRazer(el._id)}>O'chirish!🚮</button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AdminGet;

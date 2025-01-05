import React, { useEffect, useState } from 'react';
import AdminGet from '../components/AdminGet/AdminGet';
import Create from '../components/Create/Create';
import Search from '../components/Search/Search';
import axios from 'axios';

const Admin = () => {
  const [devices, setDevices] = useState([]);
  const [search, setSearch] = useState('');

  const searchFilter = devices.filter((el) => {
    return el?.name?.toLowerCase().includes(search.toLowerCase());
  });

  useEffect(() => {
    if (!localStorage.getItem('ADMIN_TOKEN')) {
      window.location.href = '/';
    }
  }, []);

  useEffect(() => {
    axios
      .get('https://razer-api.onrender.com/devices')
      .then((res) => {
        setDevices(res.data);
      })
      .catch((err) => alert(err));
  }, []);
  return (
    <div>
      <div className='logout'>
        <button
          onClick={() => {
            localStorage.removeItem('ADMIN_TOKEN');
            window.location.reload();
          }}
        >
          Admindan chiqish!
        </button>
      </div>
      <Create />
      <Search search={search} setSearch={setSearch} />
      <AdminGet
        searchFilter={searchFilter}
      />
    </div>
  );
};

export default Admin;

// crud
// c - create
// r - read -get

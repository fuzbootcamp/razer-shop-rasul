import React from 'react';

const Pinkod = () => {
  function enterAdmin(e) {
    e.preventDefault();

    if (e.target[0].value == '7777') {
      localStorage.setItem('ADMIN_TOKEN', e.target[0].value);
      window.location.href = '/admin';
    }
  }

  return (
    <div>
      <div className='pinkod_wrap'>
        <div className='pinkod'>
          <img
            width={70}
            src='https://razer-shop.netlify.app/static/media/razer-ths-logo.0d25071aa9e861bf55d7f240475a2ff1.svg'
            alt=''
          />
          <form onSubmit={enterAdmin}>
            <input type='password' required />
            <button type='submit'>Enter</button>
            <p>Welcome to Admin Page!</p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Pinkod;

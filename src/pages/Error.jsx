import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div>
      <Link to={'/'} className='error'>
        <img
          src='https://preview.redd.it/egfty2xztfv61.png?width=640&crop=smart&auto=webp&s=b498fcd37245382af95d41da8e8e25e26f61fbe8'
          alt=''
        />
      </Link>
    </div>
  );
};

export default Error;

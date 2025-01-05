import { useCart } from 'react-use-cart';
import { Image } from 'antd';
import { FaRegHeart } from 'react-icons/fa';
import { FaHeart } from 'react-icons/fa6';

import { useFavoritesContext } from '../../context/FavoritesContext';

const ProductCard = ({ el }) => {
  const { addItem, inCart, removeItem } = useCart();
  const { addToFavorites, isInFav, removeFromFavorites } =
    useFavoritesContext();

  return (
    <div className='card'>
      {isInFav(el._id) ? (
        <button className='fav' onClick={() => removeFromFavorites(el._id)}>
          <FaHeart color='red' size={22} />
        </button>
      ) : (
        <button className='fav' onClick={() => addToFavorites(el)}>
          <FaRegHeart color='white' size={22} />
        </button>
      )}
      <Image className='img' src={el.image} alt='' />
      <h3>{el.name}</h3>
      <p>{el.desc}</p>
      <span>
        <b>US${el.price}</b>
        {inCart(el._id) ? (
          <button onClick={() => removeItem(el._id)}>REMOVE</button>
        ) : (
          <button onClick={() => addItem({ ...el, id: el._id })}>BUY</button>
        )}
      </span>
    </div>
  );
};

export default ProductCard;

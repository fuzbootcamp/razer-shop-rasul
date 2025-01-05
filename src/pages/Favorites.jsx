import { useFavoritesContext } from '../context/FavoritesContext';
import ProductCard from '../components/ProductCard';

const FavoritesPage = () => {
  const { items, isEmpty } = useFavoritesContext();

  return (
    <main>
      <section className='container'>
        {isEmpty ? (
          <img src='/empty.png' alt='' />
        ) : (
          <div className='store_wrapper'>
            {items.map((el) => {
              return <ProductCard key={el._id} el={el} />;
            })}
          </div>
        )}
      </section>
    </main>
  );
};

export default FavoritesPage;

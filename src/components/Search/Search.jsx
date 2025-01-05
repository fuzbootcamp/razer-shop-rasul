import './search.scss';

const Search = ({ search, setSearch }) => {
  return (
    <div>
      <div className='container'>
        <div className='search'>
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type='text'
            placeholder='Search by Category'
          />
        </div>
      </div>
    </div>
  );
};

export default Search;

import { useState } from 'react';

const ImageSearch = ({ onQuerySearch }) => {
  const [query, setQuery] = useState('');

  const submitHandler = (event) => {
    event.preventDefault();
    onQuerySearch(query);
    setQuery('');
  };

  const inputChangeHandler = ({ target: { value } }) => {
    setQuery(value);
  };

  return (
    <div className='max-w-sm rounded overflow-hidden my-10 mx-auto'>
      <form className='w-full max-w-sm' onSubmit={submitHandler}>
        <div className='flex items-center border-b-2 border-teal-500 py-2'>
          <input
            className='appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none'
            type='text'
            placeholder='Search image...'
            onChange={inputChangeHandler}
            value={query}
          />
          <button
            className='flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded'
            type='submit'
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default ImageSearch;

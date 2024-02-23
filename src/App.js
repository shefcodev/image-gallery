import { useState, useEffect } from 'react';

import ImageCard from './components/ImageCard';
import ImageSearch from './components/ImageSearch';

const App = () => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState('');
  const [isInitial, setIsInitial] = useState(true);

  const querySearchHandler = (query) => {
    setTerm(query);
  };

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await fetch(
          `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo`
        );

        if (!response.ok) {
          throw new Error('error');
        }

        return await response.json();
      } catch (error) {
        return error.message;
      }
    };

    if (!isInitial) {
      setIsLoading(true);

      fetchImage().then((response) => {
        setImages(response.hits.length ? response.hits : []);
        setIsLoading(false);
      });
    }

    setIsLoading(false);
    setIsInitial(false);
  }, [term]);

  return (
    <div className='container mx-auto'>
      <ImageSearch onQuerySearch={querySearchHandler} />
      {isLoading && (
        <h1 className='text-center text-2xl font-normal text-teal-500 mt-32'>
          Loading...
        </h1>
      )}
      {!isLoading && images.length ? (
        <div className='grid grid-cols-3 gap-4'>
          {images.map(
            ({ id, tags, views, downloads, likes, webformatURL, user }) => (
              <ImageCard
                key={id}
                tags={tags}
                views={views}
                downloads={downloads}
                likes={likes}
                webformatURL={webformatURL}
                user={user}
              />
            )
          )}
        </div>
      ) : (
        <h1 className='text-center text-3xl font-semibold  text-teal-500'>
          No Images Found
        </h1>
      )}
    </div>
  );
};

export default App;

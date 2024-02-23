import { useState, useEffect } from 'react';

import ImageCard from './components/ImageCard';

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState('');

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

    fetchImage().then((response) => {
      setImages(response.hits);
      setIsLoading(false);
    });
  }, [term]);

  return (
    <div className='container mx-auto'>
      {isLoading ? (
        <h1 className='text-center text-6xl mx-auto mt-32'>Loading...</h1>
      ) : (
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
      )}
    </div>
  );
}

export default App;

import { useState, useEffect } from 'react';

import ImageCard from './components/ImageCard';

function App() {
  const [image, setImages] = useState([]);
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

  return <ImageCard />;
}

export default App;

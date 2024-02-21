const ImageCard = ({ tags, views, downloads, likes, webformatURL }) => {
  const imageTags = tags.split(', ');

  return (
    <div className='max-w-sm rounded overflow-hidden shadow-lg'>
      <img src={`${webformatURL}`} alt='' className='w-full' />
      <div className='px-6 py-4'>
        <div className='font-bold text-purple-500 text-xl mb-2'>
          Photo by John Doe
        </div>
        <ul>
          <li>
            <strong>Views: </strong>
            {views}
          </li>
          <li>
            <strong>Downloads: </strong>
            {downloads}
          </li>
          <li>
            <strong>Likes: </strong>
            {likes}
          </li>
        </ul>
      </div>
      <div className='px-6 py-4'>
        {imageTags.map((tag, idx) => (
          <span
            key={idx}
            className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mt-2'
          >
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ImageCard;

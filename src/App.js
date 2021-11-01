import React, { useEffect, useState } from 'react';
import { useSearchCart, useSearchHandler } from './context';
import './main.css';

const App = () => {
  const search = useSearchCart();
  const [imageInput, setImageInput] = useState('');
  const [imagesToDisplay, setImagesToDisplay] = useState([]);
  const updateSearch = useSearchHandler();

  useEffect(() => {
    fetchImages();
  }, []);

  const handleSubmit = e => {
    e.preventDefault();
    updateSearch({ searchTerm: imageInput, page: '1' });
    fetchImages();
  };

  const fetchImages = async () => {
    try {
      const response = await fetch(
        `https://api.unsplash.com/search/photos?query=${search.searchTerm}&page=${search.page}&per_page=12&client_id=gK52De2Tm_dL5o1IXKa9FROBAJ-LIYqR41xBdlg3X2k`,
      );
      const data = await response.json();
      renderImages(data.results);
    } catch (error) {
      throw new Error(error);
    }
  };

  const spliceIntoChunks = arr => {
    const res = [];
    while (arr.length > 0) {
      const chunk = arr.splice(0, 3);
      res.push(chunk);
    }
    return res;
  };

  const renderImages = arr => setImagesToDisplay(spliceIntoChunks(arr));

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className='search'>
          <div className='info'>
            <h4>Unsplash 2.0</h4>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </p>
          </div>
          <div className='form-control'>
            <input
              onInput={e => setImageInput(e.target.value)}
              placeholder='Search for images'
              type='text'
              className='search-field'
            />
            <button id='search-btn' type='submit'>
              <svg
                width='32'
                height='32'
                className='DFW_E nT46U NIGLg'
                viewBox='0 0 32 32'
                version='1.1'
                aria-hidden='false'
              >
                <path d='M22 20c1.2-1.6 2-3.7 2-6 0-5.5-4.5-10-10-10S4 8.5 4 14s4.5 10 10 10c2.3 0 4.3-.7 6-2l6.1 6 1.9-2-6-6zm-8 1.3c-4 0-7.3-3.3-7.3-7.3S10 6.7 14 6.7s7.3 3.3 7.3 7.3-3.3 7.3-7.3 7.3z'></path>
              </svg>
            </button>
          </div>
          <div className='trending'>
            <p>Trending: </p>
            <button
              onClick={() => {
                updateSearch({ searchTerm: 'nature', page: '1' });
                fetchImages();
              }}
              className='trendy'
            >
              Nature
            </button>
            <button
              onClick={() => {
                updateSearch({ searchTerm: 'adventure', page: '1' });
                fetchImages();
              }}
              className='trendy'
            >
              Adventure
            </button>
            <button
              onClick={() => {
                updateSearch({ searchTerm: 'cars', page: '1' });
                fetchImages();
              }}
              className='trendy'
            >
              Cars
            </button>
            <button
              onClick={() => {
                updateSearch({ searchTerm: 'sunset', page: '1' });
                fetchImages();
              }}
              className='trendy'
            >
              Sunset
            </button>
          </div>
        </div>
      </form>
      <div className='image-container-header'>
        <h2 className='output'>Results for {search.searchTerm}</h2>
        <div className='buttons'>
          <button id='prev-btn'>&#8249 Previous</button>
          <p className='page'>{search.page}</p>
          <button id='next-btn'> Next &#8250</button>
        </div>
      </div>
      <main className='image-container'>
        {imagesToDisplay.length ? (
          imagesToDisplay.map(imageObj => (
            <section key={imageObj.id} className='image-column'>
              {imageObj.map(image => (
                <div key={image.urls.small}>
                  <article className='image-card'>
                    <header className='image'>
                      <img src={image.urls.small} alt='Avatar' />
                      <div className='image-overlay'>
                        <div className='user'>
                          <div className='profile-img'>
                            <img src={image.user.profile_image.small} />
                          </div>
                          <p>
                            Creator: {image.user.first_name}{' '}
                            {image.user.last_name}
                          </p>
                        </div>
                      </div>
                    </header>
                  </article>
                  <footer className='footer'>
                    {image.tags.map(tag => (
                      <button
                        key={tag.title}
                        onClick={() => {
                          updateSearch({
                            searchTerm: tag.title,
                            page: '1',
                          });
                          fetchImages();
                        }}
                        className='tag'
                      >
                        {tag.title}
                      </button>
                    ))}
                  </footer>
                </div>
              ))}
            </section>
          ))
        ) : (
          <p>Empty</p>
        )}
      </main>
    </>
  );
};

export default App;

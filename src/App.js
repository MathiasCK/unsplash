import React, { useEffect, useState } from 'react';
import { useHanldeSubmit } from './context';
import './main.css';

const App = () => {
  const submit = useHanldeSubmit();
  const [searchValue, setSearchValue] = useState('');
  const [images, setImages] = useState([]);
  const [pageValue, setPageValue] = useState(1);

  useEffect(() => {
    updateSearch('random', 1);
    setPageValue(1);
    setSearchValue('random');
  }, []);

  const updateSearch = async (value, page) => {
    setImages(await submit(value, page));
  };

  return (
    <>
      <form
        onSubmit={e => {
          e.preventDefault();
          updateSearch(searchValue);
          setPageValue(1);
        }}
      >
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
              onInput={e => setSearchValue(e.target.value)}
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
              onClick={e => {
                updateSearch(e.target.innerHTML.toLowerCase(), 1);
                setPageValue(1);
                setSearchValue(e.target.innerHTML.toLowerCase());
              }}
              className='trendy'
            >
              Nature
            </button>
            <button
              onClick={e => {
                updateSearch(e.target.innerHTML.toLowerCase(), 1);
                setPageValue(1);
                setSearchValue(e.target.innerHTML.toLowerCase());
              }}
              className='trendy'
            >
              Adventure
            </button>
            <button
              onClick={e => {
                updateSearch(e.target.innerHTML.toLowerCase(), 1);
                setPageValue(1);
                setSearchValue(e.target.innerHTML.toLowerCase());
              }}
              className='trendy'
            >
              Cars
            </button>
            <button
              onClick={e => {
                updateSearch(e.target.innerHTML.toLowerCase(), 1);
                setPageValue(1);
                setSearchValue(e.target.innerHTML.toLowerCase());
              }}
              className='trendy'
            >
              Sunset
            </button>
          </div>
        </div>
      </form>
      <div className='image-container-header'>
        <h2 className='output'>Results for {searchValue}</h2>
        <div className='buttons'>
          <button
            onClick={() => {
              if (pageValue === 1) {
                return;
              }
              setPageValue(pageValue - 1);
              updateSearch(searchValue, pageValue);
            }}
          >
            Previous
          </button>
          <p className='page'>{pageValue}</p>
          <button
            onClick={() => {
              setPageValue(pageValue + 1);
              updateSearch(searchValue, pageValue);
            }}
          >
            Next
          </button>
        </div>
      </div>
      <main className='image-container'>
        {images.length &&
          images.map(imageObj => (
            <section key={imageObj.id} className='image-column'>
              {imageObj.map(image => (
                <div key={image.urls.small}>
                  <article className='image-card'>
                    <header className='image'>
                      <img src={image.urls.small} alt='Avatar' />
                      <div className='image-overlay'>
                        <div className='user'>
                          <div className='profile-img'>
                            <img
                              alt={image.user.profile_image.small}
                              src={image.user.profile_image.small}
                            />
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
                        className='tag'
                        key={tag.title}
                        onClick={() => {
                          updateSearch(tag.title, 1);
                          setPageValue(1);
                          setSearchValue(tag.title);
                        }}
                      >
                        {tag.title}
                      </button>
                    ))}
                  </footer>
                </div>
              ))}
            </section>
          ))}
      </main>
    </>
  );
};

export default App;

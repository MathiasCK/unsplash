import React, { useEffect } from 'react';
import Form from './components/form/Form';
import {
  useHanldeSubmit,
  useImages,
  usePageValue,
  useSearchValue,
  useUpdatePageValue,
  useUpdateSearchValue,
} from './context';
import './main.css';

const App = () => {
  const updateSearch = useHanldeSubmit();
  const searchValue = useSearchValue();
  const setSearchValue = useUpdateSearchValue();
  const pageValue = usePageValue();
  const setPageValue = useUpdatePageValue();
  const images = useImages();

  useEffect(() => {
    updateSearch('random', 1);
    setPageValue(1);
    setSearchValue('random');
  }, []);

  return (
    <>
      <Form />
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

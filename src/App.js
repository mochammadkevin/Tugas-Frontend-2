import React, { useState } from 'react';
import './App.css';

const PAGE_FILMS = 'films';
const PAGE_WISHLIST = 'wishlist';

function App() {
  const [wishlist, setWishlist] = useState([]);
  const [page, setPage] = useState(PAGE_FILMS);
  const [films] = useState([
    {
      name: 'Spider-Man: No Way Home',
      desc: "With Spider-Man's identity now revealed, our friendly neighborhood web-slinger is unmasked and no longer able to separate his normal life as Peter Parker from the high stakes of being a superhero.",
      image: 'https://pbs.twimg.com/media/FDo0mohVQAAP5Td?format=jpg&name=large',
    },
    {
      name: 'Sesame Street',
      desc: "They team up with a plucky history show host Sally Hawthorne (Anne Hathaway) who's on a quest to save her show and prove that Sesame Street actually exists, with obstacles created by the 'evil' Mayor, with reasons of his own for keeping Sesame Street hidden from the world.",
      image: 'https://m.media-amazon.com/images/M/MV5BYmFkN2VhMDUtYjIzYy00MDVkLTllNDQtZDUyN2I3MGRmNjI3XkEyXkFqcGdeQXVyNTk5NTQzNDI@._V1_.jpg',
    },
    {
      name: 'The Batman',
      desc: 'The Riddler plays a dangerous game of cat and mouse with Batman and Commissioner Gordon in Gotham City.',
      image: 'https://cdn0-production-images-kly.akamaized.net/sV4ZzbEFVwz5zEgyW1sYrv5Xvg4=/640x360/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/3565180/original/076668900_1631090466-maxresdefault__1_.jpg',
    },
    {
      name: 'The Kings Man',
      desc: 'One man must race against time to stop a war that could wipe out millions of people and destroy humanity.',
      image: 'https://m.media-amazon.com/images/M/MV5BZTdmM2Q0ZjYtNzlkOS00NTI4LWE4NTAtZWU5ZmRjZWMxOWFkXkEyXkFqcGdeQXNuZXNodQ@@._V1_.jpg',
    },
    {
      name: 'Minions: The Rise of Gru',
      desc: "The untold story of one 12-year-old's dream to be named the greatest supervillain in the whole world.",
      image: 'https://gizmostory.com/wp-content/uploads/2021/08/Minions-2.jpg',
    },
    {
      name: 'Top Gun: Maverick',
      desc: "Pete 'Maverick' Mitchell keeps pushing the envelope after years of service as one of the Navy's top aviators.",
      image: 'https://deadline.com/wp-content/uploads/2020/01/top-gun-2.jpg',
    }
  ]);

  const addToWishlist = (film) => {
    console.log('we are in addToWishlist');
    setWishlist([...wishlist, film])
  };

  const removeFromWishlist = (filmToRemove) => {
    setWishlist(wishlist.filter(film => film !== filmToRemove ))
  };

  const navigateTo = (nextPage) => {
    setPage(nextPage);
  };

  const renderFilms = () => (
    <>
            <h1>Movie List</h1>
            <div className="films">
              {films.map((film, idx) => (
                <div className="film" key={idx}>
                  <h3>{film.name}</h3>
                  <h4>{film.desc}</h4>
                  <img src={film.image} alt={film.name} />
                  <button onClick={() => addToWishlist(film)}>Add to Wishlist</button>
            </div>
          ))}
      </div>
    </>
  );

  const renderWishlist = () => (
    <>
            <h1>Wish List</h1>
            <div className="films">
              {wishlist.map((film, idx) => (
                <div className="film" key={idx}>
                  <h3>{film.name}</h3>
                  <h4>{film.date}</h4>
                  <img src={film.image} alt={film.name} />
                  <button onClick={() => removeFromWishlist(film)}>Remove</button>
            </div>
          ))}
      </div>
    </>
  );

  return (
    <div className="App">
        <header>
         <button onClick={() => navigateTo(PAGE_WISHLIST)}>Go to Wishlist ({wishlist.length})</button>

         <button onClick={() => navigateTo(PAGE_FILMS)}>View Films</button>
        </header>
        {page === PAGE_FILMS && renderFilms()}
        {page === PAGE_WISHLIST && renderWishlist()}
      </div>
    );
}

export default App;

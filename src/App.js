import React, { useState } from 'react';
import './App.css';
import MovieList from './components/MovieList';
import MovieDetailsPage from './components/MovieDetailsPage'; // Import the new component here

function App() {
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
  };

  return (
    <div className="App">
      <header className='header'>
        <h1 className='title'>STREAM-IT</h1>
      </header>
      {selectedMovie ? (
        <MovieDetailsPage movie={selectedMovie} />
      ) : (
        <MovieList onMovieClick={handleMovieClick} />
      )}
    </div>
  );
}

export default App;

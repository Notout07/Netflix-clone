import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MovieRow from './components/MovieRow';
import DetailView from './components/DetailView';
import VideoPlayerModal from './components/VideoPlayerModal';
import { movies, categories } from './data';
import './index.css';

function App() {
  const [playingMovie, setPlayingMovie] = useState(null);
  const [detailMovie, setDetailMovie] = useState(null);
  
  // Hero is the first movie in the data we want to feature
  const heroMovie = movies[0];

  const handlePlay = (movie) => {
    setPlayingMovie(movie);
  };

  const handleMoreInfo = (movie) => {
    setDetailMovie(movie);
  };

  const closeModals = () => {
    setPlayingMovie(null);
    setDetailMovie(null);
  };

  // Prevent scrolling when a modal is open
  useEffect(() => {
    if (playingMovie || detailMovie) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [playingMovie, detailMovie]);

  return (
    <div className="app">
      <Navbar />
      
      <main>
        <Hero 
          movie={heroMovie} 
          onPlay={handlePlay} 
          onMoreInfo={handleMoreInfo} 
        />
        
        <div style={{ marginTop: '-10vh', position: 'relative', zIndex: 10 }}>
          {categories.map((category, index) => (
            <MovieRow 
              key={index} 
              title={category.title} 
              movies={category.items} 
              onPlay={handlePlay}
              onSelect={handleMoreInfo}
            />
          ))}
        </div>
      </main>

      <footer style={{ padding: '40px 4%', textAlign: 'center', color: '#777', marginTop: '40px', borderTop: '1px solid #222' }}>
        <p>&copy; 2026 MovieHub Streaming Service. All Rights Reserved.</p>
      </footer>

      {/* Modals */}
      {playingMovie && (
        <VideoPlayerModal 
          movie={playingMovie} 
          onClose={closeModals} 
        />
      )}

      {detailMovie && (
        <DetailView 
          movie={detailMovie} 
          onPlay={handlePlay}
          onClose={closeModals} 
        />
      )}
    </div>
  );
}

export default App;

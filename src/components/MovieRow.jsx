import { useState, useRef } from 'react';
import { Play } from 'lucide-react';

const MovieRow = ({ title, movies, onPlay, onSelect }) => {
  const rowRef = useRef(null);

  if (!movies || movies.length === 0) return null;

  return (
    <div style={{ marginBottom: '3rem', paddingLeft: '4%' }}>
      <h2 style={{ fontSize: '1.4rem', fontWeight: 600, marginBottom: '1rem' }}>{title}</h2>
      
      <div 
        ref={rowRef}
        style={{
          display: 'flex',
          gap: '10px',
          overflowX: 'scroll',
          paddingBottom: '20px',
          paddingRight: '4%',
          scrollbarWidth: 'none', // Firefox
          MsOverflowStyle: 'none', // IE/Edge
        }}
        className="movie-row-container"
      >
        <style dangerouslySetInnerHTML={{__html: `
          .movie-row-container::-webkit-scrollbar { display: none; }
          .movie-poster-card {
            flex: 0 0 auto;
            width: 200px;
            aspect-ratio: 2 / 3;
            border-radius: 6px;
            overflow: hidden;
            position: relative;
            transition: transform 0.3s ease, z-index 0.3s ease;
            cursor: pointer;
            z-index: 1;
            background-color: #222;
          }
          .movie-poster-card:hover {
            transform: scale(1.1) translateY(-10px);
            z-index: 10;
            box-shadow: 0 10px 20px rgba(0,0,0,0.8);
          }
          .movie-poster-overlay {
            position: absolute;
            top: 0; left: 0; right: 0; bottom: 0;
            background: linear-gradient(to top, rgba(0,0,0,0.9), transparent 60%);
            opacity: 0;
            transition: opacity 0.3s ease;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            padding: 15px;
          }
          .movie-poster-card:hover .movie-poster-overlay {
            opacity: 1;
          }
        `}} />
        
        {movies.map((movie, index) => (
          <div key={`${movie.id}-${index}`} className="movie-poster-card" onClick={() => onSelect(movie)}>
            <img 
              src={movie.posterImage} 
              alt={movie.title} 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
              loading="lazy"
            />
            <div className="movie-poster-overlay">
              <h3 style={{ fontSize: '1rem', fontWeight: 'bold', marginBottom: '5px' }}>{movie.title}</h3>
              <div style={{ display: 'flex', gap: '10px' }}>
                <button 
                  onClick={(e) => { e.stopPropagation(); onPlay(movie); }}
                  style={{ 
                    backgroundColor: 'white', color: 'black', borderRadius: '50%', width: '32px', height: '32px', 
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    transition: 'transform 0.2s'
                  }}
                  onMouseOver={e => e.currentTarget.style.transform = 'scale(1.1)'}
                  onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
                >
                  <Play size={16} fill="black" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieRow;

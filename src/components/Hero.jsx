import { Play, Info } from 'lucide-react';

const Hero = ({ movie, onPlay, onMoreInfo }) => {
  if (!movie) return null;

  return (
    <div style={{
      height: '90vh',
      position: 'relative',
      backgroundImage: `url(${movie.heroImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center top',
      color: 'white'
    }}>
      {/* Dark Gradient Overlay */}
      <div style={{
        position: 'absolute',
        top: 0, left: 0, right: 0, bottom: 0,
        background: 'linear-gradient(to right, rgba(11, 12, 16, 0.9) 0%, rgba(11, 12, 16, 0.4) 50%, transparent 100%)'
      }} />
      <div style={{
        position: 'absolute',
        top: 0, left: 0, right: 0, bottom: 0,
        background: 'var(--gradient-bg)'
      }} />

      <div className="container" style={{
        position: 'relative',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingTop: '10vh',
        maxWidth: '800px',
        margin: '0 4%' // specific left alignment
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
          <span style={{ backgroundColor: 'var(--color-primary)', fontSize: '0.7rem', fontWeight: 'bold', padding: '2px 6px', borderRadius: '2px' }}>
            FEATURE FILM
          </span>
          <span style={{ fontSize: '0.9rem', color: '#ccc' }}>• {movie.rating || 'Action • Sci-Fi • 2024'}</span>
        </div>
        
        <h1 style={{ fontSize: '4.5rem', fontWeight: 900, lineHeight: 1.1, marginBottom: '1.5rem', textTransform: 'uppercase' }}>
          {movie.title}
        </h1>
        
        <p style={{ fontSize: '1.2rem', lineHeight: 1.5, color: '#e5e5e5', marginBottom: '2rem', maxWidth: '600px' }}>
          {movie.description}
        </p>

        <div className="flex items-center gap-4">
          <button className="btn btn-primary" onClick={() => onPlay(movie)}>
            <Play fill="currentColor" size={24} />
            Play
          </button>
          <button className="btn btn-secondary" onClick={() => onMoreInfo(movie)}>
            <Info size={24} />
            More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;

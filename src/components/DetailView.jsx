import { X, Play, Plus, ThumbsUp } from 'lucide-react';
import MovieRow from './MovieRow';
import { categories } from '../data';

const DetailView = ({ movie, onClose, onPlay }) => {
  if (!movie) return null;

  // Find some recommendations (we just use the 'More Like This' category for demo)
  const recommendations = categories.find(c => c.title === 'More Like This').items;

  return (
    <div style={{
      position: 'fixed',
      top: 0, left: 0, right: 0, bottom: 0,
      backgroundColor: 'rgba(0,0,0,0.7)',
      zIndex: 500,
      display: 'flex',
      justifyContent: 'center',
      paddingTop: '5vh',
      paddingBottom: '5vh',
      overflowY: 'auto'
    }}>
      <div 
        className="glass-panel"
        style={{
          width: '90%',
          maxWidth: '850px',
          minHeight: '800px',
          borderRadius: '12px',
          position: 'relative',
          overflow: 'hidden',
          backgroundColor: '#181818',
          animation: 'slideUp 0.4s ease-out'
        }}
      >
        <button 
          onClick={onClose}
          style={{
            position: 'absolute', top: '15px', right: '15px',
            background: '#181818', color: 'white', borderRadius: '50%', padding: '8px', zIndex: 10,
            cursor: 'pointer'
          }}
        >
          <X size={24} />
        </button>

        {/* Header Cover */}
        <div style={{ position: 'relative', height: '400px' }}>
          <div style={{
            position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
            backgroundImage: `url(${movie.heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }} />
          <div style={{
            position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
            background: 'linear-gradient(to top, #181818 0%, transparent 50%)'
          }} />
          
          <div style={{ position: 'absolute', bottom: '20px', left: '40px' }}>
            <h1 style={{ fontSize: '3rem', fontWeight: 900, marginBottom: '20px', textTransform: 'uppercase' }}>
              {movie.title}
            </h1>
            <div className="flex items-center gap-4">
              <button className="btn btn-primary" onClick={() => onPlay(movie)}>
                <Play fill="currentColor" size={20} /> Play Now
              </button>
              <button 
                style={{ 
                  width: '40px', height: '40px', border: '1px solid rgba(255,255,255,0.5)', 
                  borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' 
                }}>
                <Plus size={20} />
              </button>
              <button 
                style={{ 
                  width: '40px', height: '40px', border: '1px solid rgba(255,255,255,0.5)', 
                  borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' 
                }}>
                <ThumbsUp size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Content Details */}
        <div style={{ padding: '40px', display: 'flex', gap: '40px' }}>
          <div style={{ flex: '2' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#46d369', fontWeight: 'bold', marginBottom: '15px' }}>
              <span>{movie.year}</span>
              <span style={{ color: '#fff' }}>{movie.duration}</span>
              <span style={{ border: '1px solid rgba(255,255,255,0.4)', padding: '0 4px', color: '#fff', fontSize: '0.8rem' }}>{movie.ageRating || 'PG-13'}</span>
            </div>
            <p style={{ fontSize: '1.05rem', lineHeight: 1.6, color: '#e5e5e5' }}>
              {movie.description}
            </p>
          </div>
          
          <div style={{ flex: '1', fontSize: '0.9rem', color: '#777' }}>
            <div style={{ marginBottom: '10px' }}>
              <span style={{ color: '#fff' }}>Cast:</span> {movie.cast?.join(', ') || 'Various'}
            </div>
            <div style={{ marginBottom: '10px' }}>
              <span style={{ color: '#fff' }}>Genres:</span> {movie.genre?.join(', ') || 'Various'}
            </div>
            <div>
              <span style={{ color: '#fff' }}>Director:</span> {movie.director || 'Various'}
            </div>
          </div>
        </div>

        {/* More Like This */}
        <div style={{ padding: '0 40px 40px' }}>
          <h3 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '20px' }}>More Like This</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '15px' }}>
            {recommendations.slice(0, 6).map(rec => (
              <div key={rec.id} style={{ backgroundColor: '#2f2f2f', borderRadius: '4px', overflow: 'hidden', cursor: 'pointer' }}>
                <img src={rec.posterImage} alt={rec.title} style={{ width: '100%', height: '140px', objectFit: 'cover' }} />
                <div style={{ padding: '10px' }}>
                  <div style={{ fontWeight: 600 }}>{rec.title}</div>
                  <div style={{ color: '#aaa', fontSize: '0.8rem', marginTop: '5px' }}>{rec.year}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailView;

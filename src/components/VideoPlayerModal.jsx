import { X } from 'lucide-react';

const VideoPlayerModal = ({ movie, onClose }) => {
  if (!movie) return null;

  return (
    <div style={{
      position: 'fixed',
      top: 0, left: 0, right: 0, bottom: 0,
      backgroundColor: 'rgba(0,0,0,0.9)',
      zIndex: 1000,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      animation: 'fadeIn 0.3s ease-in-out'
    }}>
      <div style={{
        position: 'relative',
        width: '90%',
        maxWidth: '1000px',
        aspectRatio: '16/9',
        backgroundColor: '#000',
        borderRadius: '8px',
        overflow: 'hidden',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
      }}>
        <button 
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '20px', right: '20px',
            color: 'white',
            zIndex: 10,
            background: 'rgba(0,0,0,0.5)',
            borderRadius: '50%',
            padding: '5px',
            cursor: 'pointer',
            transition: 'background 0.2s'
          }}
          onMouseOver={e => e.currentTarget.style.background = 'rgba(255,255,255,0.2)'}
          onMouseOut={e => e.currentTarget.style.background = 'rgba(0,0,0,0.5)'}
        >
          <X size={24} />
        </button>
        
        <iframe 
          width="100%" 
          height="100%" 
          src={`https://www.youtube.com/embed/${movie.youtubeId}?autoplay=1&rel=0&modestbranding=1`} 
          title="Movie Trailer" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
          style={{ border: 'none' }}
        ></iframe>
      </div>
    </div>
  );
};

export default VideoPlayerModal;

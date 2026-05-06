import { useState, useEffect } from 'react';
import { Search, Bell, User } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav style={{
      position: 'fixed', top: 0, width: '100%', zIndex: 100,
      transition: 'background-color 0.3s ease',
      backgroundColor: isScrolled ? 'var(--color-bg)' : 'transparent',
      boxShadow: isScrolled ? '0 2px 10px rgba(0,0,0,0.5)' : 'none'
    }}>
      <div className="container flex items-center justify-between" style={{ padding: '1rem 4%' }}>
        <div className="flex items-center gap-6">
          <h1 className="text-primary" style={{ fontSize: '1.5rem', fontWeight: 900, letterSpacing: '1px' }}>
            MOVIEHUB
          </h1>
          <ul className="flex items-center gap-4 hidden-mobile" style={{ listStyle: 'none', color: '#e5e5e5', fontSize: '0.9rem' }}>
            <li><a href="#" style={{ fontWeight: 'bold', color: 'white' }}>Home</a></li>
            <li><a href="#">TV Shows</a></li>
            <li><a href="#">Movies</a></li>
            <li><a href="#">New & Popular</a></li>
            <li><a href="#">My List</a></li>
          </ul>
        </div>
        
        <div className="flex items-center gap-4">
          <button style={{ color: 'white' }}><Search size={20} /></button>
          <button style={{ color: 'white' }}><Bell size={20} /></button>
          <button style={{ color: 'white' }}>
             <div style={{ width: '32px', height: '32px', borderRadius: '4px', backgroundColor: '#333', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
               <User size={20} color="white" />
             </div>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import Link from './Link';
import '../css/Footer.css';
import { useState, useEffect } from 'react';

const Footer = () => {
  const hearts = ["❤️", "💛", "🧡", "💚", "💙", "💜"];
  const [heart, setHeart] = useState("💜");

  useEffect(() => {
    const interval = setInterval(() => {
      setHeart(randomHeart());
    }, 1000);
    return () => clearInterval(interval);
  });

  const randomHeart = () => hearts[Math.floor(Math.random() * hearts.length)];

  return (
    <footer className="py-4 d-flex text-center justify-content-center bg-dark text-white">
      <p className='m-0 p-0'>Dev&apos;d with {heart} by Gallardo7761</p>
      <span className="mx-3">|</span>
      <div className="d-flex gap-3 justify-content-center">
        {[
          { text: 'GitHub', to: 'https://github.com/Gallardo7761' },
          { text: 'Instagram', to: 'https://instagram.com/gallardoo7761' },
          { text: 'Reddit', to: 'https://reddit.com/u/Gallardo7761' },
        ].map((social) => (
          <Link key={social.text} to={social.to}>
            {social.text}
          </Link>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
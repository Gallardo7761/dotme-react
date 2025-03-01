import Link from './Link';
import '../css/Footer.css';

const Footer = () => {
  return (
    <footer className="py-4 text-center text-muted bg-dark text-white">
      <p className='text-light'>© {new Date().getFullYear()} Jose, <a href='https://miarma.net'>miarma.net</a>. Todos los derechos reservados.</p>
      <div className="d-flex gap-3 justify-content-center mt-2">
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
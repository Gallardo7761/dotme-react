import PropTypes from 'prop-types';
import '../css/Header.css';
import { useTheme } from "../contexts/ThemeContext";
import { useEffect, useState } from 'react';

const Header = (props) => {
    const { theme } = useTheme();
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <header className={`p-4 justify-content-center text-center ${theme}`}>
            {width > 768 ? (
                <>
                    <h1 className='p-0 m-0'>{props.title}</h1>
                    <p className="subtitle p-0 m-0">{props.subtitle}</p>
                </>
            ) : (
                <h1>{props.shortTitle}</h1>
            )}
        </header>
    );
}

Header.propTypes = {
    title: PropTypes.string,
    shortTitle: PropTypes.string,
    subtitle: PropTypes.string
}

export default Header;
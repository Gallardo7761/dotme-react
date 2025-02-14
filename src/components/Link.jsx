import PropTypes from 'prop-types';

const Link = ({ to, children }) => {
    
    return (
        <a href={to} className='nav-link'>{children}</a>
    );
}

Link.propTypes = {
    to: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};

export default Link;
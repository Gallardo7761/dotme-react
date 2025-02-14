import Link from "./Link";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const NavItem = ({ children, ...props }) => {
    // eslint-disable-next-line no-unused-vars
    const [active, setActive] = useState("");

    useEffect(() => {
        if (window.location.pathname === props.to) {
            setActive("active");
        }
    }, [props.to]);

    return (
        <li className='nav-item'>
            <Link to={props.to}>{children}</Link>
        </li>
    );
}

NavItem.propTypes = {
    children: PropTypes.node.isRequired,
    to: PropTypes.string.isRequired,
};

export default NavItem;
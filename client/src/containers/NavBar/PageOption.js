import { NavLink } from 'react-router-dom';

import styles from './navBar.module.css'

const PageOption = ({ title, link }) => {
    return (
        <NavLink
            to={link}
            className={styles.navBar__option}
            style={({ isActive }) => (isActive ?
                {
                    background: 'black',
                    color: 'white',
                } :
                { color: 'black' })}
        >
            <h3> {title} </h3>
        </NavLink>
    );
};

export default PageOption;
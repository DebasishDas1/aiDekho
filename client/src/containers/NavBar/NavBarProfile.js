import { useRef } from 'react';

import Avatar from '@mui/material/Avatar';

import styles from './navBar.module.css'

const NavBarProfile = () => {
    const name = useRef('Debasish Das');

    return (
        <div className={styles.navBar__profile} >
            <Avatar style={{ width: '2rem', height: '2rem' }} > {name.current[0]} </Avatar>
            <h3> {name.current} </h3>
        </div>
    );
};

export default NavBarProfile;
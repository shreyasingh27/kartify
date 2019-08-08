import React from 'react';
import './homepage.styles.scss';
import Directory from '../../components/directory-menu/directory-menu.component';
import '../../components/directory-menu/directory-menu.styles.scss';

const Homepage = () => (
    <div className='homepage'>
        <Directory />
    </div>
)

export default Homepage;
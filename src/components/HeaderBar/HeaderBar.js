import React from 'react';
import logo from '../../assets/NASA_Worm_logo.svg';

function HeaderBar() {
    return (
        <div className='HeaderBar'>
            <img className='HeaderImg' src={logo} alt='NASA Worm Logo'/>
            <h1 className='HeaderText'>NASA Photo of the Day</h1>
        </div>
    )
}

export default HeaderBar;
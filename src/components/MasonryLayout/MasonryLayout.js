import React from 'react';
import PropTypes from 'prop-types';

function MasonryLayout(props) {
    return (
        <div>
            <img src={props.data.url} alt={props.data.title}/>
        </div>
    )
}

export default MasonryLayout;
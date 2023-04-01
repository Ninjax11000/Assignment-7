import React from 'react';
import './Bookmark.css'

const Bookmark = (props) => {
    return (
        <div className='bookmark-title text-left '>
            
            <h3 className='fs-6 fw-semibold py-3 px-3'>{props.title}</h3>
        </div>
    );
};

export default Bookmark;
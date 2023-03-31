import React from 'react';
import './Sidebar.css'
import Bookmark from '../Bookmark/Bookmark';

const Sidebar = (props) => {
    console.log(props.bookmarks);
    const bookmarks= props.bookmarks;
    return (
        <div>
            <div className='px-2'>
                <div className=' time-container card'>
                <h1 className=' time-bar fs-5 fw-bold mx-auto my-3'>Spent time on read : {props.readTime}</h1>
                </div>
                <div className='post-container'>
                    {
                            bookmarks.map(bookmark=>(
                                <Bookmark title={bookmark.title}></Bookmark>
                            ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
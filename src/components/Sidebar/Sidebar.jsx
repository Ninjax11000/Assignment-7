import React from 'react';
import './Sidebar.css'
import Bookmark from '../Bookmark/Bookmark';

const Sidebar = (props) => {
    console.log(props.bookmarks);
    const bookmarks= props.bookmarks;
    return (
        <div>
            <div className='px-2'>
                <div className=' time-container card border border-primary'>
                <h1 className=' time-bar fs-5 fw-bold mx-auto my-3'>Spent time on read : {props.readTime}</h1>
                </div>
                <div className='post-container card mt-3 border border-0'>
                    <div className='mt-3 pt-3 ms-3 mb-3'>
                    <h3 className='fs-5 fw-bold mb-3'>Bookmarked Blogs: {bookmarks.length}</h3>
                    {
                            bookmarks.map(bookmark=>(
                                <Bookmark title={bookmark.title}></Bookmark>
                            ))
                    }
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
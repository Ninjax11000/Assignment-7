import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark} from '@fortawesome/free-solid-svg-icons'

const Blog = () => {
    return (
        <div>
            <div className=' card bg-primary my-2 '>
                <div >
                    <img className='w-100 rounded' src="https://plus.unsplash.com/premium_photo-1663852297654-56d979cf72d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" />
                </div>
                <div className='d-flex align-items-center justify-content-between'>
                    <div className='d-flex'>
                    <img className='rounded-circle a-img' src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" />
                    <div>
                    <h3>Author</h3>
                    <p>Mar 14(4days ago)</p>
                    </div>
                    </div>
                    <p>10 min read <span><button><FontAwesomeIcon icon={faBookmark} /></button></span> </p>
                </div>
               
                <h2>Floral decoration tips</h2>
                
            </div>
            <button className='text-start'>Mark as Read </button>
                <hr /> 
        </div>
    );
};

export default Blog;
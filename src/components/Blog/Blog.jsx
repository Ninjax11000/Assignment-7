import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark} from '@fortawesome/free-solid-svg-icons'

const Blog = (props) => {
    console.log(props.blog.image);
    return (
        <div>
            <div className=' card bg-primary my-2 '>
                <div >
                    <img className='w-100 rounded' src={props.blog.image} alt="" />
                </div>
                <div className='d-flex align-items-center justify-content-between'>
                    <div className='d-flex'>
                    <img className='rounded-circle a-img' src={props.blog.author_img} alt="" />
                    <div>
                    <h3>{props.blog.author}</h3>
                    <p>Mar 14(4days ago)</p>
                    </div>
                    </div>
                    <p>{props.blog.read_time} min read <span><button><FontAwesomeIcon icon={faBookmark} /></button></span> </p>
                </div>
               
                <h2>{props.blog.title}</h2>
                
            </div>
            <button className='text-start'>Mark as Read </button>
                <hr /> 
        </div>
    );
};

export default Blog;
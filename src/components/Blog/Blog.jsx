import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark} from '@fortawesome/free-solid-svg-icons'

const Blog = (props) => {
    console.log(props.blog.image);
    return (
        <div>
            <div className=' card  my-2  '>
                <div >
                    <img className='w-100 rounded' src={props.blog.image} alt="" />
                </div>
                <div className='d-flex align-items-center justify-content-between mt-3'>
                    <div className='d-flex ms-2'>
                    <img className='rounded-circle a-img' src={props.blog.author_img} alt="" />
                    <div className='ms-2'>
                    <h3 className='fs-5 fw-bold'>{props.blog.author}</h3>
                    <p className='text-secondary'>Mar 14(4days ago)</p>
                    </div>
                    </div>
                    <p className='text-secondary'>{props.blog.read_time} min read <span><button className='btn btn-link'><FontAwesomeIcon icon={faBookmark} /></button></span> </p>
                </div>
               
                <h2 className='fs-2 fw-bold ms-2'>{props.blog.title}</h2>
                <button className='text-start btn btn-link w-25 fw-bold'>Mark as Read </button>
            </div>
            
                <hr /> 
        </div>
    );
};

export default Blog;
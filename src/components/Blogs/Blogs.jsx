import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';
import './Blogs.css'

const Blogs = ({handleReadTime,handleBookmark}) => {
   
        const [blogs,setBlogs]=useState([]);
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setBlogs(data))
    },[]);

    return (
        <div>
            {
                blogs.map((blog)=>(
                    <Blog blog={blog}
                        key={blog.id}
                        handleReadTime={handleReadTime}
                        handleBookmark={handleBookmark}
                    ></Blog>
                ))
            }
           
        </div>
    );
};

export default Blogs;
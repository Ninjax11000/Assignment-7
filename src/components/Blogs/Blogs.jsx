import React, { useEffect, useState } from 'react';
import Blog1 from '../Blog/Blog1';
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
                    <Blog1 blog={blog}
                        key={blog.id}
                        handleReadTime={handleReadTime}
                        handleBookmark={handleBookmark}
                    ></Blog1>
                ))
            }
           
        </div>
    );
};

export default Blogs;
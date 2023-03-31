import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';
import './Blogs.css'

const Blogs = () => {
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
                    ></Blog>
                ))
            }
           
        </div>
    );
};

export default Blogs;
import React from 'react';
import './Sidebar.css'

const Sidebar = (props) => {
    return (
        <div>
            <div className='px-2'>
                <div className=' time-container card'>
                <h1 className=' time-bar fs-5 fw-bold mx-auto my-3'>Spent time on read : {props.readTime}</h1>
                </div>
                
            </div>
        </div>
    );
};

export default Sidebar;
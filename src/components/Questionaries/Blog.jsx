import React from 'react';

const Blog = () => {
    return (
        <div>
            <div>
                <ul>
                    <li><h3>Props vs state</h3>
                        <p>
                        The state is an updatable structure that is used to contain data or information about the component and can change over time.
                        <p>
                        Props are read-only components. It is an object which stores the value of attributes of a tag and work similar to the HTML attributes. Props can't be changed.
                        </p>
                        </p>
                    </li>
                    <li><h3>How does useState work?</h3>
                    useState is React Hook that allows you to add state to a functional component.
                    It has two values. The current state and a funtion to update it.The state is updated whenever the setter functionis called.
                    </li>
                    <li><h3>Purpose of useEffect other than fetching data</h3>
                        <p>
                        The useEffect in react js allows you to perform side effects in your components. The react useEffect examples of side effects include retrieving data, direct DOM updates, and timers. The second argument is optional.
                        </p>
                    </li>
                    <li><h3>How Does React work?</h3>
                     <p>
                     ReactJS divides the UI into reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept properties or props. It's possible to have as many components as necessary.
                     </p>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Blog;
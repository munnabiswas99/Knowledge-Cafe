import { useState, useEffect } from 'react';
import Blog from '../Blog/Blog';
const Blogs = ({ handleBookmark }) => {
    const [blogs, setBlogs] = useState([]);

    useEffect(()=>{
        fetch('blogs.json')
        .then(res=> res.json())
        .then(data=> setBlogs(data))
    },[])


    return (
        <div className='w-2/3'>
            {
                blogs.map(blog => <Blog key = {blog.id} blog={blog} handleBookmark={handleBookmark}></Blog>)
            }
        </div>
    );
};

export default Blogs;
import React, { useContext } from 'react';
import { BlogContext } from '../context/BlogContext';

function BlogList() {
  const { blogs, deleteBlog } = useContext(BlogContext);

  return (
    <div>
      {blogs.map((blog) => (
        <div key={blog._id}>
          <h2>{blog.title}</h2>
          <img src={`http://localhost:5000${blog.photo}`} alt={blog.title} style={{ width: '200px' }} />
          <p>{blog.description}</p>
          <button onClick={() => deleteBlog(blog._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default BlogList;

// src/context/BlogContext.js
import React, { createContext, useState } from 'react';
import axios from 'axios';

export const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
  const [blogs, setBlogs] = useState([]);

  const fetchBlogs = async () => {
    const res = await axios.get('http://localhost:5000/blogs');
    setBlogs(res.data);
  };

  const createBlog = async (blogData) => {
    const formData = new FormData();
    Object.entries(blogData).forEach(([key, value]) => {
      formData.append(key, value);
    });
    await axios.post('http://localhost:5000/blogs', formData);
    fetchBlogs();
  };

  const updateBlog = async (id, blogData) => {
    const formData = new FormData();
    Object.entries(blogData).forEach(([key, value]) => {
      formData.append(key, value);
    });
    await axios.put(`http://localhost:5000/blogs/${id}`, formData);
    fetchBlogs();
  };

  const deleteBlog = async (id) => {
    await axios.delete(`http://localhost:5000/blogs/${id}`);
    fetchBlogs();
  };

  return (
    <BlogContext.Provider value={{ blogs, fetchBlogs, createBlog, updateBlog, deleteBlog }}>
      {children}
    </BlogContext.Provider>
  );
};

import React, { useState, useContext } from 'react';
import { BlogContext } from '../context/BlogContext';

function BlogForm() {
  const [form, setForm] = useState({ title: '', description: '', photo: null });
  const { createBlog } = useContext(BlogContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    createBlog(form);
    setForm({ title: '', description: '', photo: null });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={form.title}
        onChange={(e) => setForm({ ...form, title: e.target.value })}
        required
      />
      <textarea
        placeholder="Description"
        value={form.description}
        onChange={(e) => setForm({ ...form, description: e.target.value })}
        required
      ></textarea>
      <input type="file" onChange={(e) => setForm({ ...form, photo: e.target.files[0] })} />
      <button type="submit">Add Blog</button>
    </form>
  );
}

export default BlogForm;

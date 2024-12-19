import { useState } from 'react';
import axios from 'axios';

function PostForm() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [tags, setTags] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const tagArray = tags.split(',').map((tag) => tag.trim());
    axios
      .post('http://localhost:5000/api/posts', { title, content, tags: tagArray }, {
        headers: {
          'x-auth-token': localStorage.getItem('token'),
        },
      })
      .then(() => {
        setTitle('');
        setContent('');
        setTags('');
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
      <textarea placeholder="Content" value={content} onChange={(e) => setContent(e.target.value)} required></textarea>
      <input type="text" placeholder="Tags (comma-separated)" value={tags} onChange={(e) => setTags(e.target.value)} />
      <button type="submit">Create Post</button>
    </form>
  );
}

export default PostForm;
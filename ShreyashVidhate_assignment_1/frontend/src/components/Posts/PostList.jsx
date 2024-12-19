import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function PostList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/posts').then((response) => {
      setPosts(response.data);
    });
  }, []);

  return (
    <ul>
      {posts.map((post) => (
        <li key={post._id}>
          <Link to={`/posts/${post._id}`}>{post.title}</Link>
        </li>
      ))}
    </ul>
  );
}

export default PostList;
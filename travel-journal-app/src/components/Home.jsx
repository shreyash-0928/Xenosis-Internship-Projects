import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Welcome to the Travel Journal</h1>
      <Link className='add' to="/add-entry">Add a new travel entry</Link>
      <Link className='view' to="/view-entries">View all travel entries</Link>
    </div>
  );
};

export default Home;

import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <div>      
      <Link to="/users">Users</Link>
      <br />
      <Link to="/post">Post user</Link>
    </div>
  );
};

export default HomePage;
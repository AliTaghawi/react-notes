import { useParams } from 'react-router-dom';
import { useUserDetails } from '../hooks/queries';

const UserDetails = () => {
  const { id } = useParams()

  const { data } = useUserDetails(id)
  
  console.log(data?.data)
  return (
    <div>
      User details - {id}
    </div>
  );
};

export default UserDetails;
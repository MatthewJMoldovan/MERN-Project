import { useParams } from 'react-router-dom';

export const OneUser = (props) => {
  const { id } = useParams();

  return <h2>One User</h2>;
};

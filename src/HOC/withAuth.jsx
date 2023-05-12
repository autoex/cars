import { useContext } from 'react';
import { AuthContext } from '../providers/auth/AuthProvider';

const withAuth = (Component) => (props) => {
  const { user } = useContext(AuthContext);

  if (!user) return 'Please login';
  return <Component {...props} />;
};

export default withAuth;

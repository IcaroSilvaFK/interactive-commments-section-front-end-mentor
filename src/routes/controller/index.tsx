import { Navigate } from 'react-router-dom';
import { useUser } from '../../store/users';

export function ControllerRoute({ children }: { children: JSX.Element }) {
  const { user } = useUser((state) => state);

  return user ? <Navigate to='/home' /> : children;
}

import { useNavigate as usePush } from 'react-router-dom';

export function useNavigate() {
  const navigate = usePush();

  function push(uri: string) {
    navigate(uri);
  }

  return { push };
}

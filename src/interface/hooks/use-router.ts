import { useContext } from 'react';
import { RouterContext } from '../contexts/router.tsx';

export function useRouter() {
  return useContext(RouterContext);
}

import React from 'react';
import Onboard from './onboard.tsx';

import { useRouter } from '../hooks/use-router.ts';
import Home from '@/interface/app/home.tsx';

export default function Index() {
  const { route } = useRouter();

  switch (route) {
    case 'onboard':
      return <Onboard />;

    case 'home':
      return <Home />;

    default:
      return <Onboard />;
  }
}

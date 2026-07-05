import React from 'react';
import Onboard from './onboard.tsx';

import { useRouter } from '../hooks/use-router.ts';

export default function Index() {
  const { route } = useRouter();

  switch (route) {
    case 'onboard':
      return <Onboard />;

    default:
      return <Onboard />;
  }
}

import React from 'react';
import Index from './interface/app/index.tsx';
import { render } from 'ink';
import { TerminalDimensionsProvider } from '@/interface/contexts/terminal-dimensions.tsx';
import { RouterProvider } from '@/interface/contexts/router.tsx';

function App() {
  return (
    <RouterProvider>
      <TerminalDimensionsProvider>
        <Index />
      </TerminalDimensionsProvider>,
    </RouterProvider>
  );
}

const { waitUntilExit } = await render(<App />, { patchConsole: true, fullScreen: true });

await waitUntilExit();

import { useContext } from 'react';
import { TerminalDimensionsContext } from '../contexts/terminal-dimensions.tsx';

export function useTerminalDimensions() {
  return useContext(TerminalDimensionsContext);
}

import React, { createContext, ReactNode, useEffect, useState } from 'react';

interface ITerminalDimensionsContext {
  rows: number;
  cols: number;
}

export const TerminalDimensionsContext = createContext<ITerminalDimensionsContext>({} as ITerminalDimensionsContext);

export function TerminalDimensionsProvider({ children }: { children: ReactNode }) {
  const { rows: initialRows, columns: initialCols } = Deno.consoleSize();

  const [rows, setRows] = useState(initialRows);
  const [cols, setCols] = useState(initialCols);

  useEffect(() => {
    const handler = () => {
      const { rows, columns } = Deno.consoleSize();
      setRows(rows);
      setCols(columns);
    };

    Deno.addSignalListener('SIGWINCH', handler);

    return () => Deno.removeSignalListener('SIGWINCH', handler);
  }, []);

  return (
    <TerminalDimensionsContext.Provider value={{ rows, cols }}>
      {children}
    </TerminalDimensionsContext.Provider>
  );
}

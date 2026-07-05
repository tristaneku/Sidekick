import React, { createContext, ReactNode, useState } from 'react';
import { Routes } from '@/interface/routes.ts';

interface IRouterContext {
  route?: Routes;
  props: Record<string, unknown>;
  navigate: (route: Routes, props?: Record<string, unknown>) => void;
}

export const RouterContext = createContext<IRouterContext>({} as IRouterContext);

export function RouterProvider({ children }: { children: ReactNode }) {
  const [route, setRoute] = useState<Routes>();
  const [props, setProps] = useState<Record<string, unknown>>({});

  function navigate(route: Routes, props?: Record<string, unknown>) {
    setRoute(route);
    setProps(props ?? {});
  }

  return (
    <RouterContext.Provider
      value={{
        route,
        props,
        navigate,
      }}
    >
      {children}
    </RouterContext.Provider>
  );
}

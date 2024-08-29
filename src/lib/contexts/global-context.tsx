"use client";

import type { Dispatch, ReactNode, SetStateAction } from "react";
import React, { createContext, useContext, useState } from "react";

// Define the shape of your global state
type GlobalState = {
  scout: boolean;
  setScout: Dispatch<SetStateAction<boolean>>;
};

const GlobalContext = createContext<GlobalState | undefined>(undefined);

/**
 *
 * @param {React.FC<{children: ReactNode;}>} props the child component.
 * @returns {React.FC} the provider component.
 */
export const GlobalProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [scout, setScout] = useState<boolean>(false);

  const value = {
    scout,
    setScout,
  };

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};

/**
 * useGlobalContext
 * @returns {GlobalState} the global state.
 */
export const useGlobalContext = (): GlobalState => {
  const context = useContext(GlobalContext);
  if (context === undefined) {
    throw new Error("useGlobalContext must be used within a GlobalProvider");
  }
  return context;
};

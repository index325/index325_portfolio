import React, { createContext, useContext, useCallback, useState } from "react";

interface IContextData {
  isLoading: boolean;
  handleLoading: (loading: boolean) => void;
}

const LoadingContext = createContext<IContextData>({} as IContextData);

interface Props {
  children: React.ReactNode;
}

const LoadingProvider = ({ children }: Props) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleLoading = useCallback((loading) => {
    setIsLoading(loading);
  }, []);

  return (
    <LoadingContext.Provider value={{ isLoading, handleLoading }}>
      {children}
    </LoadingContext.Provider>
  );
};

const useLoading = (): IContextData => {
  const context = useContext(LoadingContext);

  if (!context) {
    throw new Error("useLoading must be used within a LoadingProvider");
  }

  return context;
};

export { LoadingProvider, useLoading };

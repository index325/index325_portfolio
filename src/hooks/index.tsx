import React from "react";

import { LoadingProvider } from "@Hooks/useLoading";

interface Props {
  children: React.ReactNode;
}

const AppProvider = ({ children }: Props) => (
  <LoadingProvider>{children}</LoadingProvider>
);

export default AppProvider;

import * as React from "react";
import { ChakraProvider, theme } from "@chakra-ui/react";
import AppProvider from "./hooks";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";
import "./globalStyle.css";

export const App = () => (
  <ChakraProvider theme={theme}>
    <BrowserRouter>
      <AppProvider>
        <Routes />
      </AppProvider>
    </BrowserRouter>
  </ChakraProvider>
);

import "./App.css";
import React from "react";
import { useAxios } from "./Hook/DataHook/DataHook";

import AppRouter from "./routers/AppRouter";
function App() {
  useAxios(25);

  return <AppRouter />;
}

export default App;

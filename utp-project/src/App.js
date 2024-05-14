import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import React from "react";
import Topbar from "./scenes/global/Topbar";
import Pagos from "./scenes/form/Pagos";
import SignUp from "./cognito/CognitoConfiguration";
import Consulta from "./scenes/TablaConsulta/consulta";

function App() {
  const [theme, colorMode] = useMode();
  const [setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <main className="content">
            <Topbar IsSidebar={setIsSidebar} />
            <Routes>
              <Route path="/Pagos" element={ <Pagos/>} />
              <Route path="/login" element={<SignUp/>}/>
              <Route path="/consulta" element={<Consulta/>}/>
              {/* Agrega otras rutas del dashboard aquí */}
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;

import { Outlet } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./components/Theme";
import { ProSidebarProvider } from "react-pro-sidebar";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <ProSidebarProvider>
          <Outlet />
        </ProSidebarProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;

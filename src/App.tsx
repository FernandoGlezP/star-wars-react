import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material";
import Router from "./routes/Router";
import darkTheme from "./themes/darkTheme";
import "./App.css"

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Router />
    </ThemeProvider>
  );
}

export default App;

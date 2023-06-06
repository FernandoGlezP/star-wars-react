0;
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material";
import Router from "./routes/Router";
import darkTheme from "./themes/darkTheme";

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Router />
    </ThemeProvider>
  );
}

export default App;

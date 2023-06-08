import { createTheme } from "@mui/material";
import { colors } from "../constants/themes";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: colors.primary
    },
    secondary: {
      main: colors.secondary
    }
  },
  typography: {
    fontFamily: "LittleMoment"
  }
});

export default darkTheme;

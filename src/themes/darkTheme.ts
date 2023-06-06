import { createTheme } from "@mui/material";
import { colors } from "../constants/themes";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: colors.primary
    },
  },
});

export default darkTheme;

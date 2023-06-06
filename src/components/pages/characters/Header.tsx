import { Typography} from "@mui/material";
import { colors as colores } from '../../../constants/themes';

function Header() {
  return (
    <>    
      <Typography variant="h1" component="h1" textAlign="center" color={colores.secondary}>
        API RICK AND MORTY
      </Typography>
    </>
  );
}

export default Header;
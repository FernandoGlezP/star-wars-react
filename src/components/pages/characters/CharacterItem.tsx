import type Character from "../../../interfaces/character";
import { useNavigate } from 'react-router-dom';
// import styled from "@emotion/styled";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Box, CardMedia} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import Chip from "@mui/material/Chip";
import { Typography } from "@mui/material";
import Tooltip from '@mui/material/Tooltip';

// const Image = styled.img`
//   width: 100%;
// `;

type Colors = {
  Alive: "success" | "error" | "warning" | "default" | "primary",
  Dead: "success" | "error" | "warning" | "default" | "primary",
  unknown: "success" | "error" | "warning" | "default" | "primary",
}

const colors: Colors = {
  Alive: "success",
  Dead: "error",
  unknown: "warning"
}

function CharacterItem({
  image,
  name,
  species,
  status,
}: Character): JSX.Element {
  
  const navigate = useNavigate();

  return (
    <Grid xs={3}>
      <Card sx={{ display: 'flex', border: "1px solid #76ff03" }}>
      <Box>
        <CardContent>
          <Tooltip title={name} placement="top">
            <Typography textAlign="center" marginTop="10px" sx={{color: "white", textOverflow: "ellipsis", overflow: "hidden", whiteSpace: "nowrap", maxWidth: "100px"}}>
              {name}
            </Typography>
          </Tooltip>
          <Box textAlign="center" marginTop="20px" >
            <Chip onClick={() => {navigate("/prueba")}} color={colors[status]} label={status} />
          </Box>
          <Typography textAlign="center" marginTop="20px" sx={{color: "white"}}>
              {species}
          </Typography>
        </CardContent>
      </Box>
      <CardMedia
        component="img"
        sx={{ maxWidth: 200, maxHeight: 200 }}
        image={image}
        alt={name}
      />
    </Card>
  </Grid>
  );
}

export default CharacterItem;

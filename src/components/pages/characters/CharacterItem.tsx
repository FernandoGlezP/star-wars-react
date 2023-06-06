import type Character from "../../../interfaces/character";
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

function CharacterItem({
  image,
  name,
  species,
  status,
}: Character): JSX.Element {
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
          {status === "Alive" ? (
            <Chip color="success" label={status} />
          ) : null}
          {status === "Dead" ? (
            <Chip color="error" label={status} />
          ) : null}
          {status === "unknown" ? (
            <Chip color="warning" label={status} />
          ) : null}
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

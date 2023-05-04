import type Character from "../../../interfaces/character";

// import styled from "@emotion/styled";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { CardActionArea, CardMedia } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

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
      <Card>
        <CardActionArea>
          <CardContent>
            <CardMedia component="img" image={image} alt={name} />
            {/* <Image src={image} alt={name} /> */}
            {name} <span>es</span> {species} <span>y está</span> {status}
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
}

export default CharacterItem;

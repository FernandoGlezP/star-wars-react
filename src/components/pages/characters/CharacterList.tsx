import type Character from "../../../interfaces/character";

import Grid from "@mui/material/Unstable_Grid2";
import CharacterItem from "./CharacterItem";

interface Props {
  characters: Character[];
}

function CharacterList(props: Props): JSX.Element {
  const { characters } = props;

  return (
    <Grid container spacing={2}>
      {characters.map(({ name, species, status, image, id }) => {
        return (
          <CharacterItem
            key={id}
            id={id}
            image={image}
            name={name}
            species={species}
            status={status}
          />
        );
      })}
    </Grid>
  );
}

export default CharacterList;

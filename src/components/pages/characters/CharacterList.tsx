import type Character from "../../../interfaces/character";
import CharacterItem from "./CharacterItem";

import Grid from "@mui/material/Unstable_Grid2";
import Header from "./Header";

interface Props {
  characters: Character[];
}

function CharacterList(props: Props): JSX.Element {
  const { characters } = props;

  return (
    <>
      <Header/>
        <Grid container spacing={5}>
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
    </>
  );
}

export default CharacterList;
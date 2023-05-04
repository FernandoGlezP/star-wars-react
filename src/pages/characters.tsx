import type Character from "../interfaces/character";
import CharacterList from "../components/pages/characters/CharacterList";
import { useEffect, useState } from "react";
import { Container } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

type TURL = string | null;

function Characters() {
  const [characters, setCharacters] = useState<Character[]>([]);
  //const fetchUrl = "https://swapi.dev/api/people/";
  const [isLoading, setIsLoading] = useState(true);
  const [fetchUrl, setFetchUrl] = useState<TURL>(
    "https://rickandmortyapi.com/api/character/"
  );

  const [prevUrl, setPrevUrl] = useState<TURL>(null);
  const [nextUrl, setNextUrl] = useState<TURL>(null);

  const getCharacters = async () => {
    if (fetchUrl) {
      setIsLoading(true);
      const response = await fetch(fetchUrl);
      const { results, info } = await response.json();
      setCharacters(results);
      setPrevUrl(info.prev);
      setNextUrl(info.next);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    // if (fetchUrl) {
    //   setIsLoading(true);
    //   fetch(fetchUrl)
    //     .then((response) => response.json())
    //     .then((data) => {
    //       setCharacters(data.results);
    //       setPrevUrl(data.previous);
    //       setNextUrl(data.next);
    //       setIsLoading(false);
    //     });
    // }
    getCharacters();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchUrl]);

  const onPrev = () => {
    setFetchUrl(prevUrl);
  };

  const onNext = () => {
    setFetchUrl(nextUrl);
  };

  if (isLoading) {
    return <span>LOADING...</span>;
  }

  return (
    <Container>
      <CharacterList characters={characters} />
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="baseline"
      >
        {prevUrl ? (
          <Button onClick={onPrev} variant="outlined">
            Previous
          </Button>
        ) : null}
        {nextUrl ? (
          <Button
            onClick={onNext}
            variant="outlined"
            sx={{ marginLeft: "auto" }}
          >
            Next
          </Button>
        ) : null}
      </Stack>

      {/* <Grid container>
          <Grid xs={1}>{prevUrl ? <Button onClick={onPrev} variant="outlined" fullWidth>Previous</Button> : null}</Grid>
          <Grid xs={1} xsOffset={10}>{nextUrl ? <Button onClick={onNext} variant="outlined" sx={{marginLeft: 'auto'}} fullWidth>Next</Button>: null}</Grid>
      </Grid> */}
    </Container>
  );
}

export default Characters;

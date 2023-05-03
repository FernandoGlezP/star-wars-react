import type Character from "../interfaces/character";
import CharacterList from "../components/pages/characters/CharacterList";
import { useEffect, useState } from "react";

type TURL = string | null;

function Characters() {
  const [characters, setCharacters] = useState<Character[]>([]);
  //const fetchUrl = "https://swapi.dev/api/people/";
  const [isLoading, setIsLoading] = useState(true);
  const [fetchUrl, setFetchUrl] = useState<TURL>(
    "https://swapi.dev/api/people?page=7"
  );

  const [prevUrl, setPrevUrl] = useState<TURL>(null);
  const [nextUrl, setNextUrl] = useState<TURL>(null);

  const getCharacters = async () => {
    if (fetchUrl) {
      setIsLoading(true);
      const response = await fetch(fetchUrl);
      const { results, previous, next } = await response.json();
      setCharacters(results);
      setPrevUrl(previous);
      setNextUrl(next);
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
    <>
      <CharacterList characters={characters} />
      {prevUrl ? <button onClick={onPrev}>previous</button> : null}
      {nextUrl ? <button onClick={onNext}>next</button> : null}
    </>
  );
}

export default Characters;

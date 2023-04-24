import type Character from "../interfaces/character"
import CharacterList from "../components/pages/characters/CharacterList"

const characters: Character[] = [
  {
      name: "Luke Skywalker"
  },
  {
      name: "Darth Vader"
  },
  {
      name: "Han Solo"
  },
  {
      name: "Leia Organa"
  },
  {
      name: "Chewbacca"
  },
  {
      name: "Yoda"
  },
  {
      name: "Obi-Wan Kenobi"
  },
  {
      name: "R2-D2"
  },
  {
      name: "C-3PO"
  },
  {
      name: "Boba Fett"
  }
]

function Characters(){
  return <CharacterList characters={characters}/>
}

export default Characters

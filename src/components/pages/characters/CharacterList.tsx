import type Character from "../../../interfaces/character"
import CharacterItem from "./CharacterItem"

interface Props{
  characters: Character[]
}

function CharacterList(props:Props):JSX.Element{
  const {characters} = props;

  return(
    <ul>
      {characters.map( ({name}, index) => {
        return<CharacterItem key={`${index}${name}`} name={name}/>
      })}
    </ul>
  )
}

export default CharacterList
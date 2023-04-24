import type Character from "../../../interfaces/character"


function CharacterItem({name}:Character):JSX.Element{
  return <li>{name}</li>
}

export default CharacterItem


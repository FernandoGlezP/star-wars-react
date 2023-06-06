interface Character {
  id: number;
  image: string;
  name: string;
  species: string;
  status: "Alive" | "Dead" | "unknown";
}

export default Character;
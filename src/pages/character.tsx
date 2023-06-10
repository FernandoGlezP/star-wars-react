import { Box } from "@mui/material";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PageLayout from "../components/layouts/PageLayout";
import Loader from "../components/shared/Loader";
import Chip from "@mui/material/Chip";

type Colors = {
  Alive: "success" | "error" | "warning" | "default" | "primary";
  Dead: "success" | "error" | "warning" | "default" | "primary";
  unknown: "success" | "error" | "warning" | "default" | "primary";
};

const chipColors: Colors = {
  Alive: "success",
  Dead: "error",
  unknown: "warning",
};

function Character() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [data, setData] = useState({
    name: "",
    species: "",
    status: "",
    image: "",
    episodes: [],
  });
  const [episodes, setEpisodes] = useState<string[]>([]);
  const { id } = useParams();

  useEffect(() => {
    const url = `https://rickandmortyapi.com/api/character/${id}`;
    const getCharacter = async () => {
      setLoading(true);
      try {
        const response = await fetch(url);
        const { error, name, species, status, image, episode } =
          await response.json();
        if (error) {
          setError(error);
          setLoading(false);
          return;
        }
        setData({ name, species, status, image, episodes: episode });
      } catch (error) {
        setError("Ha ocurrido un error en la aplicación");
      }
      setLoading(false);
    };
    getCharacter();
  }, [id]);


  useEffect(() => {
    if (data.episodes.length) {
      Promise.all(
        data.episodes.map((episode) =>
          fetch(episode)
            .then((response) => response.json())
            .then((obj) => `${obj.episode}: ${obj.name}`)
        )
      ).then((episodesList) => {
        setEpisodes(episodesList);
      });
    }
  }, [data]);


  if (loading) {
    return <Loader />;
  }
  if (error) {
    return (
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        height="100vh"
        sx={{
          backgroundImage:
            "url('https://i.pinimg.com/originals/4e/a7/fb/4ea7fb833c63a4ea0b0fb696c5919dd7.png')",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <Typography component="h1" variant="h1" color="primary">
          {error}
        </Typography>
      </Box>
    );
  }
  return (
    <PageLayout>
      <Card
        sx={{
          border: "1px solid aqua",
          margin: "0 auto",
          width: "20%",
        }}
      >
        <Box 
          component="img"
          src={data.image}
          sx={{
            width: "100%",
            height: "100%"
          }}
        >
        </Box>
      </Card>
      <Box component="div" sx={{
        border: "1px solid aqua",
        margin: "0 auto",
        width: "30%",
        marginTop: "20px"
      }}
      >
        <Typography component="h1" variant="h2" textAlign="center">{data.name}</Typography>
        <Typography>{data.species}</Typography>

        <Box textAlign="center" marginTop="20px">
          <Chip color={chipColors[data.status]} label={data.status} />
        </Box>

        <Typography>Episodes: </Typography>
        {!!episodes.length && (
          <ul>
            {episodes.map((episode) => (
              <li key={episode}>{episode}</li>
            ))}
          </ul>
        )}
      </Box>
    </PageLayout>
  );
}

export default Character;

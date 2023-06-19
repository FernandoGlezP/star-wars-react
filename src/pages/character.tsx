import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PageLayout from "../components/layouts/PageLayout";
import Loader from "../components/shared/Loader";
import Chip from "@mui/material/Chip";
import Grid from "@mui/material/Unstable_Grid2";
import { colors } from "../constants/themes";
import Character from "../interfaces/character";
import StarBorderIcon from '@mui/icons-material/StarBorder';

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

type Data = Character & { episodes: string[] };

function CharacterDetail() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [data, setData] = useState<Data>({
    id: 0,
    name: "",
    species: "",
    status: "unknown",
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
        const { error, name, species, status, image, episode, id } =
          await response.json();
        if (error) {
          setError(error);
          setLoading(false);
          return;
        }
        setData({ name, species, status, image, episodes: episode, id });
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
      <Grid container>
        <Grid xs={2} xsOffset={5}>
          <Box
            component="img"
            src={data.image}
            width="100%"
            sx={{
              borderRadius: ".25rem",
              border: `${colors.primary} 1px solid`,
            }}
          />
        </Grid>
        <Grid xs={4} xsOffset={4}>
          <Box
            p={4}
            m={4}
            component="div"
            sx={{
              border: "1px solid aqua",
              borderRadius: ".25rem",
              backgroundColor: "rgba(50,50,50, 0.1)",
            }}
          >
            <Typography component="h1" variant="h2" textAlign="center" sx={{display: "flex", alignItems: "baseline"}}>
              {data.name}
              <StarBorderIcon sx={{ fontSize: 40 }}/>
            </Typography>
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
        </Grid>
      </Grid>
    </PageLayout>
  );
}

export default CharacterDetail;

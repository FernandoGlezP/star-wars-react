import { Box } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PageLayout from "../components/layouts/PageLayout";

function Character() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [data, setData] = useState({
    name: "",
    species: "",
    status: "",
    image: "",
  });
  const { id } = useParams();

  useEffect(() => {
    const url = `https://rickandmortyapi.com/api/character/${id}`;
    const getCharacter = async () => {
      setLoading(true);
      try {
        const response = await fetch(url);
        const { error, name, species, status, image } = await response.json();
        if (error) {
          setError(error);
          setLoading(false);
          return;
        }
        setData({ name, species, status, image });
      } catch (error) {
        setError("Ha ocurrido un error en la aplicación");
      }
      setLoading(false);
    };
    getCharacter();
  }, [id]);

  if (loading) {
    return (
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        height="100vh"
      >
        <img src="https://media.tenor.com/BgR83Df82t0AAAAi/portal-rick-and-morty.gif" />
      </Box>
    );
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
          display: "flex",
          width: 800,
          border: "1px solid aqua",
          margin: "0 auto",
          marginTop: "200px",
        }}
      >
        <CardMedia
          component="div"
          sx={{ height: 500, width: 400 }}
          image={data.image}
          title={data.name}
        />
        <CardContent
          sx={{ justifyContent: "center", alignItems: "center", maxWidth: 400 }}
        >
          <Typography component="h1" variant="h1">
            {data.name}
          </Typography>
          <Typography>
            Especie: <span>{data.species}</span>
          </Typography>
          <Typography>
            Estatus: <span>{data.status}</span>
          </Typography>
        </CardContent>
      </Card>
    </PageLayout>
  );
}

export default Character;

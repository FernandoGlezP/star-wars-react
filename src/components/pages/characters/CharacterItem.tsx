import type Character from "../../../interfaces/character";
import { useNavigate } from "react-router-dom";
// import styled from "@emotion/styled";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Box, CardMedia } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import Chip from "@mui/material/Chip";
import { Typography } from "@mui/material";
import Tooltip from "@mui/material/Tooltip";
import { colors } from "../../../constants/themes";

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

function CharacterItem({
  id,
  image,
  name,
  species,
  status,
}: Character): JSX.Element {
  const navigate = useNavigate();

  return (
    <Grid xs={12} md={6} lg={3}  >
      <Card
        sx={{
          display: "flex",
          border: `1px solid ${colors.primary}`,
          cursor: "pointer",
          transition: "0.2s",
          backgroundColor: "rgba(50,50,50, 0.1)",
          "&:hover": {
            transform: "scale(1.05)",
            border: `1px solid ${colors.secondary}`
          },
        }}
        onClick={() => {
          navigate(`/character/${id}`);
        }}
      >
        <CardContent sx={{ width: "50%" }}>
          <Tooltip title={name} placement="top">
            <Typography
              textAlign="center"
              marginTop="10px"
              sx={{
                color: "white",
                textOverflow: "ellipsis",
                overflow: "hidden",
                whiteSpace: "nowrap",
                maxWidth: "100px",
                fontSize: "13px"
              }}
            >
              {name}
            </Typography>
          </Tooltip>
          <Box textAlign="center" marginTop="20px">
            <Chip color={chipColors[status]} label={status} />
          </Box>
          <Tooltip title={species} placement="top">
            <Typography
              textAlign="center"
              marginTop="20px"
              sx={{
                color: "white",
                textOverflow: "ellipsis",
                overflow: "hidden",
                whiteSpace: "nowrap",
                maxWidth: "100px",
                fontSize: "13px"
              }}
            >
              {species}
            </Typography>
          </Tooltip>
        </CardContent>
        <CardMedia
          component="div"
          sx={{
            backgroundImage: `url(${image})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            width: "50%",
            height: "auto",
          }}
        />
      </Card>
    </Grid>
  );
}

export default CharacterItem;

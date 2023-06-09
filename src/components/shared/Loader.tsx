import { Box } from "@mui/material";
import PageLayout from "../layouts/PageLayout";

function Loader() {
  return (
    <PageLayout>
      <Box textAlign="center">
        <Box
          component="img"
          src="https://media.tenor.com/BgR83Df82t0AAAAi/portal-rick-and-morty.gif"
        />
      </Box>
    </PageLayout>
  );
}

export default Loader
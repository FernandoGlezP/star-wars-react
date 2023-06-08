import { Box } from "@mui/material";

function PageLayout({children}:React.PropsWithChildren) {
  return (
    <Box
    sx={{
      backgroundImage: "url('/images/bg.jpg')",
      backgroundPosition: 'center',
      backgroundSize: 'cover'
    }}
  >
    <Box component="header" textAlign="center" p={4}>
          <img width="30%" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Rick_and_Morty.svg/800px-Rick_and_Morty.svg.png?20220319060844" alt="Logotipo" />
    </Box>
    {children}
  </Box>
  );
}

export default PageLayout;
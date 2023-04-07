import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import DarkModeButton from "./\bcomponent/DarkModeButton";
import { useState } from "react";
import Footer from "./\bcomponent/Footer";

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function Album() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const theme = createTheme({
    palette: {
      mode: isDarkMode ? "dark" : "light",
      primary: {
        main: "#c4302b", // change this to your desired color
      },
    },
  });

  const toggleDarkMode = () => {
    console.log("내부");
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="relative">
        <DarkModeButton onClick={toggleDarkMode}>
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </DarkModeButton>
        <Button onClick={toggleDarkMode}>
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </Button>
        <Toolbar color="red">
          <LibraryMusicIcon sx={{ mr: 2 }} />
          <Typography variant="h6" color="inherit" noWrap>
            ringmybellboi 플레이리스트
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: "background.paper",
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              YOUTUBE MUSIC을 기반으로 연결됩니다.
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="text.secondary"
              paragraph
            >
              YouTube 프리미엄이 없으시면 YouTubeMusic이 아닌 YouTube 링크를
              눌러주세요!
            </Typography>

            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <a
                href="https://music.youtube.com/watch?v=GWfNH5UuJL4&feature=share"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="contained">YouTube Music</Button>
              </a>
              <a
                href="https://www.youtube.com/watch?v=2BzLz8pPS1c"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outlined">YouTube</Button>
              </a>
            </Stack>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card sx={{ maxWidth: 345 }}>
                  <CardMedia
                    component="img"
                    alt="single"
                    height="140"
                    image="/static/images/cards/contemplative-reptile.jpg"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Single
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      원슈타인
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <a
                      href="https://music.youtube.com/watch?v=GWfNH5UuJL4&feature=share"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button size="small">YouTube Music</Button>
                    </a>
                    <a
                      href="https://www.youtube.com/watch?v=2BzLz8pPS1c"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button size="small">Just YouTube</Button>
                    </a>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>

      <Footer />

      {/* End footer */}
    </ThemeProvider>
  );
}

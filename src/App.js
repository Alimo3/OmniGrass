import * as React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { AppBar, CssBaseline, Container, Grid } from '@mui/material';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import image from './img/omnigrass.avif';
import image2 from './img/otherside.jpg';

const theme = createTheme();

const App = () => {
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="relative" AppBar sx={{ bgcolor: '#82ad9a' }}>
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="open drawer"
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>

              <Typography
                fontFamily="MessinaSansWeb-Book"
                fontSize="40px"
                align="center"
                variant="h6"
                component="div"
                sx={{
                  flexGrow: 1,
                  display: { xs: 'none', sm: 'block' },
                }}
              >
                OmniGrass
              </Typography>

              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="open drawer"
                sx={{ mr: 2 }}
              >
                <SearchIcon />
              </IconButton>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="open drawer"
                sx={{ mr: 2 }}
              >
                <ShoppingCartIcon />
              </IconButton>
            </Toolbar>
          </AppBar>
        </Box>
        <main>
          <div>
            <Container
              maxWidth="lg"
              style={{
                height: 500,
              }}
            >
              <Grid
                item
                container
                sx={{ height: 500 }}
                direction="column"
                justifyContent="center"
              >
                <Typography
                  fontFamily="Monoton"
                  variant="h2"
                  align="center"
                  color="#235726"
                  height="30vh"
                >
                  OmniGrass, <br />
                  Where Grass Is Great!
                </Typography>
              </Grid>
            </Container>
          </div>
          <div>
            <Container
              style={{
                backgroundColor: '#e4ede7',
              }}
            >
              <Grid
                item
                container
                sx={{ height: 400 }}
                direction="column"
                justifyContent="center"
                style={{
                  height: 500,
                }}
              >
                <Typography
                  fontFamily="Hand-Drawn Lawn"
                  variant="h3"
                  align="left"
                  color="#235726"
                  height="20vh"
                >
                  Try our fresh wheat <br />
                  grass
                </Typography>
                <Typography
                  fontFamily="Hand-Drawn Lawn"
                  variant="h5"
                  align="left"
                  color="#235726"
                >
                  Plant your lawn with our wheat grass <br /> and get a fresh
                  green look in less then a week <br />
                  with our wheat grass, where grass is green on the <br />
                  other side!
                </Typography>
              </Grid>
            </Container>
          </div>
          <div>
            <Container
              maxWidth="lg"
              style={{
                height: 500,

                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
              }}
            >
              <Grid
                item
                container
                sx={{ height: 500 }}
                direction="column"
                justifyContent="center"
              >
                <Typography
                  fontFamily="Monoton"
                  variant="h2"
                  align="center"
                  color="#235726"
                  height="30vh"
                >
                  OmniGrass, <br />
                  Where Grass Is Great!
                </Typography>
              </Grid>
            </Container>
          </div>
        </main>
      </ThemeProvider>
    </>
  );
};

export default App;

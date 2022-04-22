import * as React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline, Container, Grid } from "@mui/material";
import Navbar from "../Navbar";
import Typography from "@mui/material/Typography";

import image from "../img/omnigrass.avif";
import image2 from "../img/otherside.jpg";

const theme = createTheme();

const Home = () => {
  return (
    <>
      <Navbar />
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <main>
          <div>
            <Container
              maxWidth="lg"
              style={{
                height: 500,
                backgroundImage: `url(${image})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
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
                backgroundColor: "#e4ede7",
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
                  backgroundImage: `url(${image2})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "400px",
                  backgroundPosition: "right",
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

                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
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

export default Home;

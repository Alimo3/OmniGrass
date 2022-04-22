import * as React from "react";
import Typography from "@mui/material/Typography";
import { FormControl } from "@mui/material";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline, Container, Grid } from "@mui/material";
import Navbar from "../Navbar";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

const theme = createTheme();

function Form() {
  const [value, setValue] = React.useState("Controlled");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <>
      <Navbar />
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Container sx={{ mt: 15, width: 450, maxWidth: "100%" }}>
          <Typography height="15vh" align="center" variant="h3">
            Form
          </Typography>

          <div>
            <TextField
              fullWidth
              required
              id="standard-textarea"
              label="First Name"
              placeholder="First Name"
              multiline
              variant="standard"
            />
          </div>
          <div>
            <TextField
              fullWidth
              required
              id="standard-textarea"
              label="Last Name"
              placeholder="Last Name"
              multiline
              variant="standard"
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <TextField
              fullWidth
              required
              id="standard-textarea"
              label="Address"
              placeholder="Address"
              multiline
              variant="standard"
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <TextField
              fullWidth
              required
              id="standard-textarea"
              label="Quantity"
              placeholder="Amount in kg"
              multiline
              variant="standard"
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <TextField
              fullWidth
              required
              id="standard-textarea"
              label="Date Of Delivery"
              placeholder="Date"
              multiline
              variant="standard"
            />
          </div>
          <Container sx={{ mt: 10, ml: 15 }} position="center">
            <Button variant="contained">Submit</Button>
          </Container>
        </Container>
      </ThemeProvider>
    </>
  );
}

export default Form;

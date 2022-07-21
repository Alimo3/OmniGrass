import React, { useState } from "react";
import react from "react";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline, Container } from "@mui/material";
import Navbar from "../Navbar";
import Button from "@mui/material/Button";
import axios from "axios";

const theme = createTheme();

function Form() {
  const [value, setValue] = React.useState(new Date());
  const [startDate, setStartDate] = useState(new Date());
  let pricePerKilo = 0.5;
  const [amount, setAmount] = useState(0);
  const [Total, setTotal] = useState(amount);
  const [selectedDate, setSelectedDate] = react.useState(
    new Date("2020-09-11T12:00:00")
  );

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [deliveryDate, setDeliveryDate] = useState("");
  const [totalOfPrice, setTotalOfPrice] = useState("");
  const [message, setMessage] = useState("");

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch("https://httpbin.org/post", {
        method: "POST",
        body: JSON.stringify({
          firstName: firstName,
          lastName: lastName,
          deliveryDate: deliveryDate,
          totalOfPrice: totalOfPrice,
        }),
      });
      let resJson = await res.json();
      if (res.status === 200) {
        setFirstName("");
        setLastName("");
        setDeliveryDate("");
        setTotalOfPrice("");
        setMessage("Form Sent Successfully");
      } else {
        setMessage("Some Error Occured");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Navbar />
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Container sx={{ mt: 15, width: 450, maxWidth: "100%" }}>
          <Typography
            fontFamily="MessinaSansWeb-Book"
            height="15vh"
            align="center"
            variant="h3"
          >
            Form
          </Typography>
          <form onSubmit={handleSubmit}>
            <div>
              <TextField
                fullWidth
                required
                id="standard-textarea"
                label="First Name"
                value={firstName}
                placeholder="First Name"
                multiline
                variant="standard"
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div>
              <TextField
                fullWidth
                required
                id="standard-textarea"
                label="Last Name"
                value={lastName}
                placeholder="Last Name"
                multiline
                variant="standard"
                onChange={(e) => setLastName(e.target.value)}
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
                placeholder="Amount in Kg"
                multiline
                variant="standard"
                onChange={(e) => setTotal(+e.target.value * pricePerKilo)}
              />
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: 30,
              }}
            >
              <TextField
                id="date"
                label="Delivery date"
                value={deliveryDate}
                type="date"
                defaultValue="MM/DD/YYYY"
                sx={{ width: 220 }}
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={(e) => setDeliveryDate(e.target.value)}
              />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <h2
                label="Total of price"
                value={totalOfPrice}
                onChange={(e) => setTotalOfPrice(e.target.value)}
              >
                Total: ${Total.toFixed(2)}
              </h2>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Button variant="contained" type="submit">
                Submit
              </Button>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              className="message"
            >
              {message ? <p>{message}</p> : null}
            </div>
          </form>
        </Container>
      </ThemeProvider>
    </>
  );
}

export default Form;

import * as React from "react";
import About from "./pages/About";
import Home from "./pages/Home";
import Form from "./pages/Form";
import { Routes, Route, Link } from "react-router-dom";
import axios from "axios";




useEffect( () => {
    getData()
}, []);

async function getData() {
  await axios("")
  .then((response) => {
    SVGMetadataElement(response.data);
  })
  .catch((error) => {
    
  })
}

const App = () => {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path="Home" element={<Home />} />
        <Route path="About" element={<About />} />
        <Route path="Form" element={<Form />} />
      </Routes>
    </>
  );
};
export default App;

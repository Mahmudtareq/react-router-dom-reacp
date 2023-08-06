import { MantineProvider } from "@mantine/core";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Menubar from "./components/Menubar/Menubar";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <MantineProvider>
      <Router>
        <Menubar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </MantineProvider>
  );
}

export default App;

import "./App.css";
// import { ROUTES } from "./Const/Routes";
import Home from "./Pages/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Details from "./Pages/Details/Details";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/element/:id" element={<Details />} />
        </Routes>
        <Footer />
      </Router>

    </div>
  );
}

export default App;
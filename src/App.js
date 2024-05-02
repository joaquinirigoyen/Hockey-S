import "./App.css";
// import { ROUTES } from "./Const/Routes";
import Home from "./Pages/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// const router = createBrowserRouter([
//   {
//     path: ROUTES.home,
//     element: <Home />,
//   },
//   {
//     path: ROUTES.login,
//     element: <Header />,
//   },
// ]);

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
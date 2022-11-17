import { BrowserRouter as Router, Routes, Route, Navigate  } from "react-router-dom";

import Home from "./pages/Home";
import Room from "./pages/Room";

import GlobalStyle from "./style/GlobalStyle";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rooms" element={<Room />} />
      </Routes>
      <GlobalStyle />
    </Router>
  );
}

export default App;
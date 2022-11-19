import { BrowserRouter as Router, Routes, Route, Navigate  } from "react-router-dom";

import Home from "./pages/Home";
import Room from "./pages/Room";

import GlobalStyle from "./style/GlobalStyle";
import { DataProvider } from "./contexts/data";


const App = () => {
  return (
    <Router>
      <DataProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rooms/:roomName" element={<Room />} />
        </Routes>
      </DataProvider>
      <GlobalStyle />
    </Router>
  );
}

export default App;
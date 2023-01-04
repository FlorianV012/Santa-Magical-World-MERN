import { Route, Routes } from "react-router-dom";
import Toys from "./routes/Toys";
import Toy from "./routes/Toy";
import Navbar from "./routes/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Toys />} />
        <Route path="/toy/:id" element={<Toy />} />
      </Routes>
    </div>
  );
}

export default App;

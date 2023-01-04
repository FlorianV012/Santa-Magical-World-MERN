import { Route, Routes } from "react-router-dom";
import Toys from "./routes/Toys";
import Toy from "./routes/Toy";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Toys />} />
        <Route path="/toy/:id" element={<Toy />} />
      </Routes>
    </div>
  );
}

export default App;

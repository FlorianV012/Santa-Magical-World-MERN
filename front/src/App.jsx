import { useState, useEffect } from "react";

function App() {
  const [toys, setToys] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/toys")
      .then((response) => response.json())
      .then((data) => {
        setToys(data);
      });
  }, []);

  return (
    <div>
      <h1>Toys</h1>
      {toys.map((toy) => {
        return <p>{toy.name}</p>;
      })}
    </div>
  );
}

export default App;

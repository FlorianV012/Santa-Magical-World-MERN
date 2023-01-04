import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Toy() {
  const [toy, setToy] = useState([]);

  const params = useParams();

  useEffect(() => {
    fetch(`http://localhost:5000/toys/${params.id}`)
      .then((response) => response.json())
      .then((data) => {
        setToy(data);
      });
  }, []);

  return (
    <div>
      <h2>{toy.name}</h2>
      <p>{toy.description}</p>
      <p>{toy.category}</p>
      <p>{toy.price}</p>
    </div>
  );
}

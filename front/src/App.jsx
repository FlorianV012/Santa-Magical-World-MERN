import { useState, useEffect } from "react";

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material/";

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
      <TableContainer
        component={Paper}
        sx={{ minWidth: 650, width: "90%", margin: "50px auto" }}
      >
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Toys</TableCell>
              <TableCell align="left">description</TableCell>
              <TableCell align="right">price</TableCell>
              <TableCell align="right">category</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {toys.map((toy) => (
              <TableRow
                key={toy.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {toy.name}
                </TableCell>
                <TableCell align="left">{toy.description}</TableCell>
                <TableCell align="right">{toy.price}</TableCell>
                <TableCell align="right">{toy.category_id}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default App;

import React, { useState, useEffect } from "react";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";

const AddToy = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/categories")
      .then((response) => response.json())
      .then((data) => {
        setCategories(data);
      });
  }, []);

  function submitToy(event) {
    event.preventDefault();

    let reqBody = {
      name: event.target.elements.toy_name.value,
      description: event.target.elements.toy_description.value,
      price: event.target.elements.toy_price.value,
      category_id: event.target[3].value,
    };

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(reqBody),
    };

    fetch("http://localhost:5000/toys", requestOptions).then((response) =>
      response.json()
    );

    event.target.reset()

  }


  return (
    <>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
        onSubmit={(event) => submitToy(event)}
      >
        <TextField id="toy_name" label="Toy name" variant="standard" />
        <TextField
          id="toy_description"
          label="Description"
          variant="standard"
        />
        <TextField
          id="toy_price"
          label="Number"
          type="number"
          variant="standard"
        />

        <TextField
          id="toy_category"
          select
          label="Select"
          defaultValue=""
          helperText="Category"
        >
          {categories.map((category) => (
            <MenuItem key={category.id} value={category.id}>
              {category.name}
            </MenuItem>
          ))}
        </TextField>

        <Button sx={{ mt: 1, mr: 1 }} type="submit" variant="outlined">
          Add toy
        </Button>
      </Box>
    </>
  );
};

export default AddToy;

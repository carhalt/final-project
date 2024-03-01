import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import { TextField, Button, Container, MenuItem } from "@mui/material";
import items from './items';
import Importants from './important';

// AddItemForm prefixes for Material UI styles
const PREFIX = "AddItemForm";

const classes = {
  root: `${PREFIX}-root`,
  label: `${PREFIX}-label`,
  input: `${PREFIX}-input`,
  button: `${PREFIX}-button`,
};

const Root = styled("form")(({ theme }) => ({
  [`& .${classes.root}`]: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: theme.spacing(2),
  },
  [`& .${classes.label}`]: {
    fontWeight: "bold",
  },
  [`& .${classes.input}`]: {
    width: "100%",
  },
  [`& .${classes.button}`]: {
    marginTop: theme.spacing(2),
  },
}));

const FormContainer = styled(Container)(({ theme }) => ({
  [`& .${classes.form}`]: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "2rem",
  },
  [`& .${classes.input}`]: {
    marginBottom: theme.spacing(2),
  },
  [`& .${classes.button}`]: {
    marginTop: theme.spacing(2),
  },
}));

// createAllclassificationclassifications array from all classifications in the item array, remove duplicate classifications
const allClassifications = Array.from(new Set(items.map((item) => item.classification)));

//initial empty item
const AddItems = ({ items, setItems }) => {
  const [newItem, setNewItem] = useState({
    id:"",
    title: "",
    classification: "",
    year: "",
    description: "",
    image: "",
  });

  // create a new item object
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewItem({ ...newItem, [name]: value });
  };

  // increment ID and add entered values to array
  const handleSubmit = (event) => {
    event.preventDefault();
    const maxId = items.reduce((acc, cur) => {
        return cur.id > acc ? cur.id : acc;
      }, 0);
    console.log("Form submitted:", newItem)
    const updatedItem = { ...newItem, id: maxId + 1 };
    const updatedItems = [...items, updatedItem];
    setItems(updatedItems);
    setNewItem({ id: "", title: "", year: "", classification: "", image: "" });
    console.log(updatedItems);
  };
  

  return (
    <div>
    <FormContainer
      maxWidth="sm"
      sx={{ display: "flex", justifyContent: "center", marginTop: "10rem" }}
    >
      <Root className={classes.root} onSubmit={handleSubmit}>
        <TextField
          className={classes.input}
          label="Title"
          name="title"
          value={newItem.title}
          onChange={handleInputChange}
        />
        <TextField
          className={classes.input}
          label="Year"
          name="year"
          value={newItem.year}
          onChange={handleInputChange}
        />
        <TextField
          className={classes.input}
          label="classification"
          name="classification"
          select
          value={newItem.classification}
          onChange={handleInputChange}
        >
          {allClassifications.map((classification) => (
            <MenuItem key={classification} value={classification}>
              {classification}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          className={classes.input}
          label="Image url"
          name="image"
          value={newItem.image}
          onChange={handleInputChange}
        />
        <Button
          className={classes.button}
          variant="contained"
          color="primary"
          type="submit"
        >
          Add Item
        </Button>
      </Root>
    </FormContainer>
    <Importants items={items} setItems={setItems}/> {/* Add items to the list of Importants*/}
    </div>
  );
};

export default AddItems;
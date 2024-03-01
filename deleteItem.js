import React from "react";
import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";

const PREFIX = "DeleteItem";

const classes = {
  button: `${PREFIX}-button`,
};

const Root = styled("div")(({ theme }) => ({
  [`& .${classes.button}`]: {
    margin: theme.spacing(2),
  },
}));

// filters out item object from items array by ID
const DeleteItem = ({ item, items, setItems }) => {
  const handleDelete = (id) => {
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
  };

  return (
    <Root>
      <Button
        className={classes.button}
        variant="contained"
        color="secondary"
        onClick={() => handleDelete(item.id)}
      >
        Delete
      </Button>
    </Root>
  );
};

export default DeleteItem;
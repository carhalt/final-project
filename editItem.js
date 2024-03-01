import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
} from "@mui/material";

const EditItems = ({ open, handleClose, item, setItems }) => {
  const [title, setTitle] = useState(item.title);
  const [year, setYear] = useState(item.year);
  const [classification, setClassification] = useState(item.classification);
  const handleSave = () => {
    const updateditem = {
      ...item,
      title,
      year,
      classification,
    };
    const updatedItems = [...item.filter((m) => m.id !== item.id), updateditem];
    setItems(updatedItems);
    handleClose();
  };

  return (
    /* Edit items form does not display */
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Edit Item</DialogTitle>
      <DialogContent>
        <TextField
          label="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Year"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Classification"
          value={classification}
          onChange={(e) => setClassification(e.target.value)}
          fullWidth
          margin="normal"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleSave} color="primary">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditItems;
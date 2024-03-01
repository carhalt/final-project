import React from "react";
import { styled } from "@mui/material/styles";
import {
  Grid,
  Paper,
  Typography,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";


// ShowItems class prefixes for Material UI styles
const PREFIX = "ShowItems";
const classes = {
  root: `${PREFIX}-root`,
  paper: `${PREFIX}-paper`,
  image: `${PREFIX}-image`,
  info: `${PREFIX}-info`,
};
const Root = styled("div")(({ theme }) => ({
  [`& .${classes.root}`]: {
    margin: theme.spacing(4),
  },
  [`& .${classes.paper}`]: {
    padding: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
  },
  [`& .${classes.image}`]: {
    width: "100%",
    height: "auto",
    marginBottom: theme.spacing(1),
  },
  [`& .${classes.info}`]: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
  },
}));

// Importants Component
const Importants = ({ items, setItems }) => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // filter out matching id from item array
  const handleDelete = (id) => {
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
  };
  return (
    <Root className={classes.root}>
      <Grid container spacing={4}>
        {items.map((item, index) => (
          <Grid item key={item.id} xs={12} sm={6} md={4} lg={3}>
            <Paper className={classes.paper}>
              <img
                src={item.image}
                alt={`${item.title} Image`}
                className={classes.image}
              />
              <div className={classes.info}>
                <Typography variant="subtitle1">{item.title}</Typography>
                <Typography variant="subtitle1">{item.year}</Typography>
              </div>
              <div className={classes.info}>
                <Typography variant="body2">{item.classification}</Typography>
              </div>
            </Paper>
            <Button
              size="small"
              color="secondary"
              onClick={() => handleDelete(item.id)}
            >
              Delete
            </Button>
            <Button size="small" color="primary" onClick={handleOpen}>
              Edit
            </Button>
            <Dialog open={open} onClose={handleClose}>
              <DialogTitle>Edit Item</DialogTitle>
              <DialogContent></DialogContent>
              <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={handleClose}>Save</Button>
              </DialogActions>
            </Dialog>
          </Grid>
        ))}
      </Grid>
    </Root>
  );
};

export default Importants;
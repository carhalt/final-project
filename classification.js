import React from "react";
import { styled } from "@mui/material/styles";
import { Grid, Paper, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import items from "./items";
import '../App.css'

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

function Classification() {
  const { classification } = useParams();

  // Filter the items array based on the selected classification
  const selectedClassificationItems = items.filter((item) => item.classification === classification);

  return (
    <div className="main-content">
      <h1>{classification} Items</h1>
      <Root className={classes.root}>
        <Grid container spacing={4}>
          {selectedClassificationItems.map((item) => (
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
            </Grid>
          ))}
        </Grid>
      </Root>
    </div>
  );
}

export default Classification;
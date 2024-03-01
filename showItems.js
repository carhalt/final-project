import React from 'react';
import { styled } from '@mui/material/styles';
import { Grid, Paper, Typography } from '@mui/material';
import items from './items';

const PREFIX = 'ShowItems';
const classes = {
  root: `${PREFIX}-root`,
  paper: `${PREFIX}-paper`,
  image: `${PREFIX}-image`,
  info: `${PREFIX}-info`,
};
const Root = styled('div')(({ theme }) => ({
  [`& .${classes.root}`]: {
    margin: theme.spacing(4),
  },
  [`& .${classes.paper}`]: {
    padding: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  [`& .${classes.image}`]: {
    width: '100%',
    height: 'auto',
    marginBottom: theme.spacing(1),
  },
  [`& .${classes.info}`]: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
  },
}));

// Display all Items in item array using Material UI styles
const ShowItems = () => {
  return (
    <Root className={classes.root}>
      <Grid container spacing={4}>
        {items.map((item) => (
          <Grid item key={item.id} xs={12} sm={6} md={4} lg={3}>
            <Paper className={classes.paper}>
              <img src={item.image} alt={`${item.title} Image`} className={item.image} />
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
  );
};

export default ShowItems;
import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Menu, MenuItem, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { ExpandMore } from '@mui/icons-material';
import { Link } from 'react-router-dom'; // import Link
import { useNavigate } from 'react-router-dom';
import items from './items';

const PREFIX = 'Navigation';
const classes = {
root: `${PREFIX}-root`,
title: `${PREFIX}-title`,
menuButton: `${PREFIX}-menuButton`,
classificationButton: `${PREFIX}-classificationButton`,
classificationMenu: `${PREFIX}-classificationMenu`,
}
const Root = styled('div')(({ theme }) => ({
  [`& .${classes.root}`]: {
    flexGrow: 1,
  },
  [`& .${classes.title}`]: {
    flexGrow: 1,
  },
  [`& .${classes.menuButton}`]: {
    marginRight: theme.spacing(2),
  },
  [`& .${classes.classificationButton}`]: {
    marginRight: theme.spacing(2),
  },
  [`& .${classes.classificationMenu}`]: {
    marginTop: theme.spacing(7),
  },
}));

const Navigation = () => {
    const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState('');
  const [selectedClassification, setSelectedClassification] = useState('');

  const handleClassificationClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClassificationClose = (classification) => {
    setAnchorEl(null);
    setSelectedClassification(classification);
    navigate(`/classifications/${classification}`);
  };

  const renderClassificationMenuItems = () => {
    const classifications = Array.from(new Set(items.map((item) => item.classification)));
    return classifications.map((classification) => (
      <MenuItem key={classification} onClick={() => handleClassificationClose(classification)}>
        {classification}
      </MenuItem>
    ));
  };

  return (
    <Root className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <Typography component={Link} to="/" variant="h6" className={classes.title}>
            My Item App
          </Typography>
          <Button component={Link} to="/items" className={classes.classificationButton} color="inherit">
          Items
          </Button>
          <Button component={Link} to="/Importants" className={classes.classificationButton} color="inherit">
            Important Items
          </Button>
          {/* Display Classifications from item array */}
          <Button
            className={classes.classificationButton}
            color="inherit"
            aria-controls="classification-menu"
            aria-haspopup="true"
            onClick={handleClassificationClick}
            endIcon={<ExpandMore />}
          >
            {selectedClassification || 'Classifications'}
          </Button>
          <Menu
            id="classification-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={() => handleClassificationClose('')}
            className={classes.classificationMenu}
          >
            {renderClassificationMenuItems()}
          </Menu>
        </Toolbar>
      </AppBar>
    </Root>
  );
};

export default Navigation;
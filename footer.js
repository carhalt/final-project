import React from 'react';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import { GitHub, LinkedIn, Twitter } from '@mui/icons-material';
import { styled } from '@mui/material/styles';

const PREFIX = 'Footer';
const classes = {
  root: `${PREFIX}-root`,
  icon: `${PREFIX}-icon`,
};

// MUI Footer Styles
const Root = styled('div')(({ theme }) => ({
  [`&.${classes.root}`]: {
    position: 'fixed',
    bottom: 0,
    width: '100%',
    backgroundColor: 'rgb(24, 118, 210)',
    zIndex: 100,
  },
  [`&.${classes.icon}`]: {
    color: theme.palette.secondary.contrastText,
  },
}));

const Footer = () => {
  return (
    <Root className={classes.root}>
      <BottomNavigation>
        <BottomNavigationAction
          label="GitHub"
          icon={<GitHub className={classes.icon} />}
          href="https://github.com/"
          target="_blank"
        />
        <BottomNavigationAction
          label="LinkedIn"
          icon={<LinkedIn className={classes.icon} />}
          href="https://www.linkedin.com/"
          target="_blank"
        />
        <BottomNavigationAction
          label="Twitter"
          icon={<Twitter className={classes.icon} />}
          href="https://twitter.com/"
          target="_blank"
        />
      </BottomNavigation>
    </Root>
  );
};

export default Footer;
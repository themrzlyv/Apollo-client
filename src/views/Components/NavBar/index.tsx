import { Grid, Theme } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

interface iProps {}

const useStyles = makeStyles((theme: Theme) => ({
  navbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.palette.primary.light,
    height: 60,
    maxHeight: 60,
    boxShadow: theme.shadows[5],
  },
}));

const NavBar: React.FC<iProps> = (): JSX.Element => {
  const classes = useStyles();
  return (
    <Grid item xl={12} lg={12} md={12} sm={12} xs={12} component="nav" className={classes.navbar}>
      <p>i am navbar</p>
    </Grid>
  );
};

export default NavBar;

import FilterBar from '@views/Components/FilterBar';
import NavBar from '@views/Components/NavBar';
import SideBar from '@views/Components/SideBar';
import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, Theme } from '@material-ui/core';

interface iProps {
  children: React.ReactNode;
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    padding: 0,
  },
  main: {
    display: 'flex',
    flexWrap: 'wrap',
    backgroundColor: theme.palette.secondary.main,
  },
}));

const Layout: React.FC<iProps> = ({ children }): JSX.Element => {
  const classes = useStyles();
  return (
    <Container maxWidth="lg" className={classes.root} component="section">
      <Grid container >
        <NavBar />
        <FilterBar />
        <Grid item xl={9} lg={9} md={9} sm={9} xs={9} className={classes.main}>
          {children}
        </Grid>
        <SideBar />
      </Grid>
    </Container>
  );
};

export default Layout;

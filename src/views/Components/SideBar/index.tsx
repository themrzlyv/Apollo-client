import { Grid, makeStyles, Theme } from '@material-ui/core';
import React from 'react';

interface iProps {}

const useStyles = makeStyles((theme: Theme) => ({
  sidebar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: theme.shadows[2],
    backgroundColor: '#fff',
  },
}));

const SideBar: React.FC<iProps> = (): JSX.Element => {
  const classes = useStyles();
  return (
    <Grid item xl={3} lg={3} md={3} sm={3} xs={3} component="aside" className={classes.sidebar}>
      <p>i am sidebar</p>
    </Grid>
  );
};

export default SideBar;

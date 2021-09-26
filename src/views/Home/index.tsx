import { makeStyles, Theme } from '@material-ui/core';
import Continents from '@views/Continents';
import React from 'react';

interface iProps {}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    padding: theme.spacing(4),
    margin: "auto"
  },
}));

const Home: React.FC<iProps> = (): JSX.Element => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Continents />
    </div>
  );
};

export default Home;

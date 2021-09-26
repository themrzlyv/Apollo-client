import { ContinentDataType } from '@common/@types';
import { Box, Button, Grid, Paper, Theme, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import React from 'react';

interface iProps {
  continent: ContinentDataType;
}

const useStyles = makeStyles((theme: Theme) => ({
  cardContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: '#fff',
  },
  cardContent: {
    display: 'flex',
    flexDirection: 'column',
    margin: theme.spacing(1),
  },
}));

const CardUi: React.FC<iProps> = ({ continent }): JSX.Element => {
  const { name, code, countries } = continent;

  const classes = useStyles();

  const countryList = countries.slice(0, 3);

  const countryItem = () => {
    return countryList.map((item, index) => (
      <Typography variant="subtitle1" key={index}>
        {item.name}
      </Typography>
    ));
  };
  return (
    <Paper className={classes.cardContainer} elevation={2} component="div">
      <Typography variant="h6">{name}</Typography>
      <div className={classes.cardContent}>
        <Typography variant="caption">Countries:</Typography>
        {countryItem()}
        <Button variant="contained">Read More</Button>
      </div>
    </Paper>
  );
};

export default CardUi;

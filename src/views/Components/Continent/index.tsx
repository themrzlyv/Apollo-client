import { ContinentDataType } from '@common/@types';
import { Button, CardActions, CardContent, Grid, Typography } from '@material-ui/core';
import CardUi from '@src/components/CardUi';
import React from 'react';

interface iProps {
  continent: ContinentDataType;
}

const Continent: React.FC<iProps> = ({ continent }) => {
  return (
    <Grid item xs={4}>
      <CardUi continent={continent} />
    </Grid>
  );
};

export default Continent;

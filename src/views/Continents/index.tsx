import { useQuery } from '@apollo/client';
import { ContinentDataType } from '@common/@types';
import { useAppDispatch, useAppSelector } from '@common/app/hooks';
import { ALL_CONTINENTS_QUERY } from '@common/data/api';
import ContinentSelector from '@common/selectors/ContinentSelector';
import { Grid } from '@material-ui/core';
import Continent from '@views/Components/Continent';
import { setAllContinents } from '@views/Continents/common/Continents.Slice';
import React, { useEffect } from 'react';

interface iProps {}

const Continents: React.FC<iProps> = (): JSX.Element => {
  const dispatch = useAppDispatch();

  const { data, loading, error } =
    useQuery<{ continents: ContinentDataType[] }>(ALL_CONTINENTS_QUERY);

  const { continents } = useAppSelector(ContinentSelector);

  useEffect(() => {
    if (data) {
      dispatch(setAllContinents({ continents: data.continents }));
    }
  }, [dispatch, data]);

  if (loading) {
    return (
      <>
        <p>Loading</p>
      </>
    );
  }

  if (error) {
    return (
      <>
        <p>Error</p>
      </>
    );
  }

  return (
    <Grid container spacing={2}>
      {continents.map((continent: ContinentDataType, index: number) => (
        <Continent key={index} continent={continent} />
      ))}
    </Grid>
  );
};

export default Continents;

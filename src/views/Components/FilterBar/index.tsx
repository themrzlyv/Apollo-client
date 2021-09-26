import {
  Button,
  FormControl,
  Grid,
  Input,
  InputLabel,
  makeStyles,
  MenuItem,
  Select,
  Theme,
} from '@material-ui/core';
import React, { useEffect } from 'react';
import { useLazyQuery } from '@apollo/client';
import { CONTINENT_QUERY } from '@common/data/api';
import { useAppDispatch, useAppSelector } from '@common/app/hooks';
import FilterSelector from '@common/selectors/FilterSelector';
import { setSearchQuery, setSearchType } from '@views/Components/FilterBar/common/Filter.Slice';
import { setAllContinents } from '@views/Continents/common/Continents.Slice';
import { ContinentDataType } from '@common/@types';

interface iProps {}

const useStyles = makeStyles((theme: Theme) => ({
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'end',
    height: 70,
    maxHeight: 70,
    backgroundColor: 'transparent',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

const FilterBar: React.FC<iProps> = (): JSX.Element => {
  const classes = useStyles();

  const dispatch = useAppDispatch();

  const { searchType, searchQuery } = useAppSelector(FilterSelector);

  const [searchData, { data, loading, error }] =
    useLazyQuery<{ continent: ContinentDataType }>(CONTINENT_QUERY);

  const setSelectBox = (e: React.ChangeEvent<{ name?: string | undefined; value: any }>) => {
    const { value } = e.target;
    dispatch(setSearchType({ searchType: value }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const { value } = e.target;
    dispatch(setSearchQuery({ searchQuery: value }));
  };

  const handleClick = () => {
    searchData({ variables: { code: searchQuery.toUpperCase() } });
  };

  useEffect(() => {
    if (data) {
      dispatch(setAllContinents({ continents: [data.continent] }));
    }
  }, [dispatch, data]);

  return (
    <Grid
      item
      xl={12}
      lg={12}
      md={12}
      sm={12}
      xs={12}
      className={classes.header}
      component="header"
    >
      <FormControl className={classes.formControl}>
        <InputLabel id="select-label">Filter Options</InputLabel>
        <Select
          labelId="select-label"
          id="demo-simple-select"
          value={searchType}
          onChange={setSelectBox}
        >
          <MenuItem value="continent">Continent</MenuItem>
          <MenuItem value="country">Country</MenuItem>
          <MenuItem value="language">Language</MenuItem>
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel id="input-label">Search</InputLabel>
        <Input id="input-label" value={searchQuery} onChange={handleChange} />
      </FormControl>
      <FormControl className={classes.formControl}>
        <Button variant="contained" onClick={handleClick}>
          Search
        </Button>
      </FormControl>
    </Grid>
  );
};

export default FilterBar;

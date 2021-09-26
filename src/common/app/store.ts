import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import ContinentsReducer from '@views/Continents/common/Continents.Slice';
import FilterReducer from '@views/Components/FilterBar/common/Filter.Slice';

export const store = configureStore({
  reducer: {
    FilterOptions: FilterReducer,
    Continent: ContinentsReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

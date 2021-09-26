import { ContinentDataType, ContinentsReducerState } from "@common/@types";
import { 
  createSlice, 
  PayloadAction
} from "@reduxjs/toolkit";

const initialState: ContinentsReducerState = {
  continents: []
}


const continentSlice = createSlice({
  name:'Continents',
  initialState: initialState,
  reducers: {
    setAllContinents: (state,action: PayloadAction<{ continents: ContinentDataType[]}>) => {
      const { continents } = action.payload;
      return {
        ...state,
        continents
      }
    }
  }
});

export const { setAllContinents } = continentSlice.actions;


export default continentSlice.reducer;
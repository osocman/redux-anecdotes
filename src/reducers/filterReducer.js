import { createSlice } from "@reduxjs/toolkit";

const defaultState = '';

const filterSlice = createSlice({
  name: 'filter',
  initialState: defaultState,
  reducers: {
    update(state, action) {
      return action.payload
    }
  }
});

export const { update } = filterSlice.actions
export default filterSlice.reducer
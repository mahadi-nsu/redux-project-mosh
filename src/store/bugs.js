import { createSlice } from "@reduxjs/toolkit";

let lastId = 0;

// using createSlice instead
const slice = createSlice({
  name: "bugs",
  initialState: [],
  reducers: {
    bugAdded: (state, action) => {
      // console.log(JSON.stringify(state, undefined, 2));
      state.push({
        id: ++lastId,
        description: action.payload.description,
        resolved: false,
      });
      // console.log({ ...vatriable });
    },

    bugResolved: (state, action) => {
      // console.log(JSON.stringify(state, undefined, 2));

      const index = state.findIndex((bug) => bug.id === action.payload.id);
      state[index].resolved = true;

      // console.log(JSON.stringify(state, undefined, 2));
    },

    bugRemoved: (state, action) => {
      const index = state.findIndex((bug) => bug.id === action.payload.id);
      const newState = state.filter((bug) => bug.id !== action.payload.id);

      return newState;
    },
  },
});

export const { bugAdded, bugRemoved, bugResolved } = slice.actions;
export default slice.reducer;

export const getUnresolvedBugs = (bugsState) => {
  return bugsState.entities.bugs.filter((bug) => !bug.resolved);
};

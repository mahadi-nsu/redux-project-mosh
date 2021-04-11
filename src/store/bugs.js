import {
  createAction,
  createReducer,
  current,
  vatriable,
} from "@reduxjs/toolkit";

// import { current } from "immer";
// Ducks Method
// current();
// Actions
// normal export
export const bugAdded = createAction("bugAdded"); //contains type and payload
export const bugResolved = createAction("bugResolved");
export const bugRemoved = createAction("bugRemoved");

// Reducers

let lastId = 0;

// should be exported default
// take initial state and action and return new state

export default createReducer([], {
  [bugAdded.type]: (state, action) => {
    state.push({
      id: ++lastId,
      description: action.payload.description,
      resolved: false,
    });
    // console.log({ ...vatriable });
  },

  [bugResolved.type]: (state, action) => {
    // console.log(JSON.stringify(state, undefined, 2));

    const index = state.findIndex((bug) => bug.id === action.payload.id);
    state[index].resolved = true;

    // console.log(JSON.stringify(state, undefined, 2));
  },

  [bugRemoved.type]: (state, action) => {
    console.log(JSON.stringify(state, undefined, 2));

    const index = state.findIndex((bug) => bug.id === action.payload.id);
    const newState = state.filter((bug) => bug.id !== action.payload.id);
    // console.log(JSON.stringify(state, undefined, 2));

    console.log(JSON.stringify(newState, undefined, 2));
    return newState;
  },
});

// export default function reducer(state = [], action) {
//   switch (action.type) {
//     case bugAdded.type:
//       // console.log(action.payload);
//       // console.log(state);
//       return [
//         ...state,
//         {
//           id: ++lastId,
//           description: action.payload.description,
//           resolved: false,
//         },
//       ];

//     case bugRemoved.type:
//       return state.filter((bug) => bug.id !== action.payload.id);

//     case bugResolved.type:
//       return state.map((bug) =>
//         bug.id !== action.payload.id ? bug : { ...bug, resolved: true }
//       );

//     default:
//       return state;
//   }
// }

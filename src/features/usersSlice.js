/*
  This slice will contain all the data that are needed for the whole application
  Reducers:
    1. populate - populates an array depending
    2. append - appends a data in an array
    3. remove - removes a data from an array
    4. select - selects the information
    5. unSelect - unselects the data
*/
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
  selected: null,
  inputs: null,
  outputs: null,
};

export const slice = createSlice({
  name: "users",
  initialState,
  reducers: {
    populate: (state, action) => {
      const p = action.payload;
      state.list = p.data;
    },
    append: (state, action) => {
      const p = action.payload;
      state.list.push(p.data);
    },
    remove: (state, action) => {
      const p = action.payload;
      state.list.filter((item) => {
        item._id !== p.data._id;
      });
    },
    select: (state, action) => {
      const p = action.payload;
      state.selected = p.data;
    },
    unSelect: (state) => {
      state.selected = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const { populate, append, remove, select, unSelect } =
  slice.actions;

export default slice.reducer;

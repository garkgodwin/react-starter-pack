/**
 * @author Gark
 * @returns {populate} populates the list data
 * @returns {append} appends the list data
 * @returns {remove} removes one item from list
 * @returns {select} select one item from list
 * @returns {unSelect} unselect selected item from list
 * @return {slice} the users slice configuration
 * TODO: add/update comments
 */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
  selected: null,
  inputs: null,
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

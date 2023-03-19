/*
  This slice will contain all the data that are needed for the whole application
  Reducers:
    1. populate - populates an array depending
    2. append - appends a data in an array
    3. remove - removes a data from an array
*/
import { createSlice } from "@reduxjs/toolkit";
import sampleData from "./sampleData";

const initialState = {
  users: [],
  todos: [],
};

export const slice = createSlice({
  name: "tables",
  initialState,
  reducers: {
    populate: (state, action) => {
      const p = action.payload;
      if (p.type === "users") state.users = p.data;
      else if (p.type === "todos") state.todos = p.data;
    },
    append: (state, action) => {
      const p = action.payload;
      if (p.type === "users") state.users.push(p.data);
      else if (p.type === "todos") state.todos.push(p.data);
    },
    remove: (state, action) => {},
  },
});

// Action creators are generated for each case reducer function
export const { populate, append, remove } = slice.actions;

//? ASYNC?
export const fetchUsers = () => async (dispatch) => {
  dispatch(
    populate({
      type: "users",
      data: sampleData.users,
    })
  );
};

export default slice.reducer;

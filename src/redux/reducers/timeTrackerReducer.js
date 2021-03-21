import { createReducer } from "@reduxjs/toolkit";
import timeTrackerActions from "../actions/timeTrackerActions";

const initialState = {
  items: [],
};

const addTracker = (state, { payload }) => ({
  ...state,
  items: [...state.items, payload],
});

const delTracker = (state, { payload }) => ({
  ...state,
  items: [...state.items.filter((item) => item.id !== payload)],
});

const timeTrackerReducer = createReducer(
  { ...initialState },
  {
    [timeTrackerActions.addTracker]: addTracker,
    [timeTrackerActions.delTracker]: delTracker,
    [timeTrackerActions.trackersFromLS]: (_, { payload }) => payload,
  }
);

export default timeTrackerReducer;

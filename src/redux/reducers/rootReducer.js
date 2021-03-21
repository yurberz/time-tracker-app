import { combineReducers } from "@reduxjs/toolkit";
import timeTrackerReducer from "./timeTrackerReducer";

const rootReducer = combineReducers({
  timeTracker: timeTrackerReducer,
});

export default rootReducer;

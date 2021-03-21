import { createAction } from "@reduxjs/toolkit";

const addTracker = createAction("tracker/add");

const delTracker = createAction("tracker/del");

const trackersFromLS = createAction("trackers/trackersFromLS");

// eslint-disable-next-line
export default { addTracker, delTracker, trackersFromLS };

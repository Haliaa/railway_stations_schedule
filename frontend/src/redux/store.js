import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {trainsReducer, stationsReducer, schedulesReducer} from "./slices";

const rootReducer = combineReducers({
    trains: trainsReducer,
    stations: stationsReducer,
    schedules: schedulesReducer
});

const store = configureStore({
    reducer:rootReducer
})

export default store

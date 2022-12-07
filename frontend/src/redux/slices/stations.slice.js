import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {stationsService} from "../../services";

const initialState= {
    stations:[],
    status:null,
    formErrors:{},
    stationForUpdate:null
};


const getAll = createAsyncThunk(
    'stationsSlice/getAll',
    async ()=>{
        const {data} = await stationsService.getAll();
        return data
    }
);
// const getById = createAsyncThunk(
//     'stationsSlice/getById',
//     async ({id})=>{
//         const {data} = await stationsService.getById(id);
//         return data
//     }
// );

const deleteById = createAsyncThunk(
    'stationsSlice/deleteById',
    async ({id},{dispatch, rejectWithValue})=>{
        try {
            await stationsService.deleteById(id);
            dispatch(deleteStationById({id}))
       }catch (e) {
            return rejectWithValue({status:e.message})

        }
    }
);

const updateById = createAsyncThunk(
    'stationsSlice/updateById',
    async ({id,station},{dispatch, rejectWithValue})=>{
        try {
            await stationsService.updateById(id, station);
            dispatch(updateStationById({id, station}))
       }catch (e) {
            return rejectWithValue({status:e.message})

        }
    }
);

const create = createAsyncThunk(
    'stationsSlice/create',
    async ({station},{dispatch,rejectWithValue})=>{
       try {
            const {data} = await stationsService.create(station);
            dispatch(createStation({station:data}))
       }catch (e) {
          return rejectWithValue({status:e.message, formErrors:e.response.data})
       }
    }
);


const stationsSlice = createSlice({
    name:'stationsSlice',
    initialState,
    reducers:{
        createStation:(state, action) => {
            state.stations.push(action.payload.station)
        },
        deleteStationById:(state, action) => {
            const index = state.stations.findIndex(station=>station.id === action.payload.id);
            state.stations.splice(index,1)
        },
        updateStationById:(state, action) => {
            const index = state.stations.findIndex(station=>station._id === action.payload._id);
            state.stations[index] = {...state.stations[index], ...action.payload.station}
            state.stationForUpdate = false
        },
        setStationForUpdate:(state, action) => {
            state.stationForUpdate = action.payload.station
        }
    }
});

const {reducer:stationsReducer, actions:{createStation, deleteStationById, updateStationById, setStationForUpdate}} = stationsSlice;
const stationsActions = {
    getAll,create,deleteById,updateById, setStationForUpdate
}

export {
    stationsReducer, stationsActions
}

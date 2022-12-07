import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {schedulesService} from "../../services";

const initialState= {
    schedules:[],
    status:null,
    formErrors:{},
    scheduleForUpdate:null
};


const getAll = createAsyncThunk(
    'schedulesSlice/getAll',
    async ()=>{
        const {data} = await schedulesService.getAll();
        return data
    }
);

const getStationSchedule = createAsyncThunk(
    'schedulesSlice/getAll',
    async ({stationId})=>{
        const {data} = await schedulesService.getStationSchedule(stationId);
        return data
    }
);

// const getById = createAsyncThunk(
//     'schedulesSlice/getById',
//     async ({id})=>{
//         const {data} = await schedulesService.getById(id);
//         return data
//     }
// );

const deleteById = createAsyncThunk(
    'schedulesSlice/deleteById',
    async ({id},{dispatch, rejectWithValue})=>{
        try {
            await schedulesService.deleteById(id);
            dispatch(deleteScheduleById({id}))
       }catch (e) {
            return rejectWithValue({status:e.message})

        }
    }
);

const updateById = createAsyncThunk(
    'schedulesSlice/updateById',
    async ({id,schedule},{dispatch, rejectWithValue})=>{
        try {
            await schedulesService.updateById(id, schedule);
            dispatch(updateScheduleById({id, schedule}))
       }catch (e) {
            return rejectWithValue({status:e.message})

        }
    }
);

const create = createAsyncThunk(
    'schedulesSlice/create',
    async ({schedule},{dispatch,rejectWithValue})=>{
       try {
            const {data} = await schedulesService.create(schedule);
            dispatch(createSchedule({schedule:data}))
       }catch (e) {
          return rejectWithValue({status:e.message, formErrors:e.response.data})
       }
    }
);


const schedulesSlice = createSlice({
    name:'schedulesSlice',
    initialState,
    reducers:{
        createSchedule:(state, action) => {
            state.schedules.push(action.payload.schedule)
        },
        deleteScheduleById:(state, action) => {
            const index = state.schedules.findIndex(schedule=>schedule.id === action.payload.id);
            state.schedules.splice(index,1)
        },
        updateScheduleById:(state, action) => {
            const index = state.schedules.findIndex(schedule=>schedule.id === action.payload.id);
            state.schedules[index] = {...state.schedules[index], ...action.payload.schedule }
            state.scheduleForUpdate = false
        },
        setScheduleForUpdate:(state, action) => {
            state.scheduleForUpdate = action.payload.schedule
        }
    }
});

const {reducer:schedulesReducer, actions:{createSchedule, deleteScheduleById, updateScheduleById, setScheduleForUpdate}} = schedulesSlice;
const schedulesActions = {
    getAll,create,deleteById,updateById, getStationSchedule, setScheduleForUpdate
}

export {
    schedulesReducer, schedulesActions
}

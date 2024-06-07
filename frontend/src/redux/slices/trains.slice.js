import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { trainsService } from "../../services";

const initialState = {
  trains: [],
  status: null,
  formErrors: {},
  trainForUpdate: null,
};

const getAll = createAsyncThunk("trainsSlice/getAll", async () => {
  const { data } = await trainsService.getAll();
  return data;
});
const getById = createAsyncThunk("trainsSlice/getById", async ({ id }) => {
  const { data } = await trainsService.getById(id);
  return data;
});

const deleteById = createAsyncThunk(
  "trainsSlice/deleteById",
  async ({ id }, { dispatch, rejectWithValue }) => {
    try {
      await trainsService.deleteById(id);
      dispatch(deleteTrainById({ id }));
    } catch (e) {
      return rejectWithValue({ status: e.message });
    }
  }
);

const updateById = createAsyncThunk(
  "trainsSlice/updateById",
  async ({ id, train }, { dispatch, rejectWithValue }) => {
    try {
      await trainsService.updateById(id, train);
      dispatch(updateTrainById({ id, train }));
    } catch (e) {
      return rejectWithValue({ status: e.message });
    }
  }
);

const create = createAsyncThunk(
  "trainsSlice/create",
  async ({ train }, { dispatch, rejectWithValue }) => {
    try {
      const { data } = await trainsService.create(train);
      dispatch(createTrain({ train: data }));
    } catch (e) {
      return rejectWithValue({
        status: e.message,
        formErrors: e.response.data,
      });
    }
  }
);

const trainsSlice = createSlice({
  name: "trainsSlice",
  initialState,
  reducers: {
    createTrain: (state, action) => {
      state.trains.push(action.payload.train);
    },
    deleteTrainById: (state, action) => {
      const index = state.trains.findIndex(
        (train) => train.id === action.payload.id
      );
      state.trains.splice(index, 1);
    },
    updateTrainById: (state, action) => {
      const index = state.trains.findIndex(
        (train) => train.id === action.payload.id
      );
      state.trains[index] = { ...state.trains[index], ...action.payload.train };
      state.trainForUpdate = false;
    },
    setTrainForUpdate: (state, action) => {
      state.trainForUpdate = action.payload.train;
    },
  },
});

const {
  reducer: trainsReducer,
  actions: { createTrain, deleteTrainById, updateTrainById, setTrainForUpdate },
} = trainsSlice;

const trainsActions = {
  getAll,
  getById,
  create,
  deleteById,
  updateById,
  setTrainForUpdate,
};

export { trainsReducer, trainsActions };

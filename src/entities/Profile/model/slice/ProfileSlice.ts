import { createSlice } from '@reduxjs/toolkit';
import { ProfileSchema } from 'entities/Profile';

const initialState: ProfileSchema = {
    data: undefined,
    isLoading: false,
    error: undefined,
    readonly: false,
};

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {},
});

// Action creators are generated for each case reducer function
export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;

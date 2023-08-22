import { createSlice } from '@reduxjs/toolkit';
import { fetchUsers } from '../thunks/fetchUsers';

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    data: [],
    isLoading: false,
    error: null,
  },
  extraReducers(builder) {
    builder.addCase(fetchUsers.pending, (state, action) => {
        state.isLoading = true;
      });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
        state.data = action.payload;
        state.isLoading = false;
      });
    builder.addCase(fetchUsers.rejected, (state, action) => {
        state.error = action.error;
        state.isLoading = false;
      });
  }
});




export const usersReducer = usersSlice.reducer;
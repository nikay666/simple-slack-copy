import { createSlice } from '@reduxjs/toolkit';
const initialState  = {
  roomId: null,
}

export const appSlice = createSlice({
  name: 'app',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    enterRoom: (state, action) => {
      state.roomId = action.payload.roomId
    },
  },
});

console.log(appSlice)
export const { enterRoom } = appSlice.actions;

export const selectRoomId = (state) => state.roomId;
console.log(selectRoomId)

export default appSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const noNotification = {
  message: '',
  error: false,
  visible: false,
}

const notificationSlice = createSlice({
  name: 'notification',
  initialState: noNotification,
  reducers: {
    setNotification(state, action) {
      const { message, error } = action.payload;
      state.message = message;
      state.error = error;
      state.visible = true;
    },
    clearNotification(state, action) {
      return noNotification
    }
  }
})

export const { setNotification, clearNotification } = notificationSlice.actions;
export default notificationSlice.reducer;
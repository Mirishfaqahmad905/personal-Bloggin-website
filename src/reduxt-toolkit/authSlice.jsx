import { createSlice } from "@reduxjs/toolkit";

// Get the saved user and login status from localStorage
const savedUser = localStorage.getItem("user");
const savedIsLoggedIn = localStorage.getItem("isLoggedIn");

const initialState = {
  user: savedUser ? JSON.parse(savedUser) : null, // Get user from localStorage or default to null
  isLoggedIn: savedIsLoggedIn ? JSON.parse(savedIsLoggedIn) : false, // Get isLoggedIn from localStorage or default to false
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
      
      // Save to localStorage
      localStorage.setItem("user", JSON.stringify(state.user));
      localStorage.setItem("isLoggedIn", true);
    },
    logout: (state) => {
      state.user = null;
      state.isLoggedIn = false;
      
      // Remove from localStorage
      localStorage.removeItem("user");
      localStorage.removeItem("isLoggedIn");
    },
  },
});

export const { loginSuccess, logout } = authSlice.actions;
export default authSlice.reducer;

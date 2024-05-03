import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (userData, { rejectWithValue }) => {
    try {
      const response = await fetch('http://localhost:8000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
      });

      if (!response.ok) {
        const errorData = await response.json();
        const errorMessage = errorData.message || 'An error occurred';
        return rejectWithValue(errorMessage);
      }
      const data = await response.json();
      localStorage.setItem('token', data.token);
      
      return { token: data.token, isAdmin: data.isAdmin }; 
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuthenticated: false,
    user: null,
    error: null,
    isAdmin: false,
  },
  reducers: {
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      state.error = null;
      state.isAdmin = false;
      localStorage.removeItem('token'); 
    },
    setIsAdmin: (state, action) => {
      state.isAdmin = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isAuthenticated = true;
        state.user = action.payload.user;
        state.isAdmin = action.payload.isAdmin; 
        state.error = null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isAuthenticated = false;
        state.user = null;
        state.error = action.payload;
        state.isAdmin = false; 
      });
      
  },
});

export const { logout, setIsAdmin  } = authSlice.actions;
export default authSlice.reducer;
import { createSlice } from '@reduxjs/toolkit';
import initialState from './state';
import reducers from './reducers';
import { thunks } from './thunks';
const animalsSlice = createSlice({
  name: 'animals',
  initialState,
  reducers,
  extraReducers: (builder) => {
    builder
      .addCase(thunks.fetchCats.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(thunks.fetchCats.fulfilled, (state, action) => {
        state.status = 'success';
        state.cats = action.payload;
      })
      .addCase(thunks.fetchCats.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      .addCase(thunks.fetchDogs.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(thunks.fetchDogs.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.dogs = action.payload;
      })
      .addCase(thunks.fetchDogs.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      .addCase(thunks.postFavoriteCat.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(thunks.postFavoriteCat.fulfilled, (state) => {
        state.status = 'succeeded';
      })
      .addCase(thunks.postFavoriteCat.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      .addCase(thunks.postFavoriteDog.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(thunks.postFavoriteDog.fulfilled, (state) => {
        state.status = 'succeeded';
      })
      .addCase(thunks.postFavoriteDog.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action;
      })
      .addCase(thunks.fetchFavoritesCats.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.favoritesCats = action.payload;
      })
      .addCase(thunks.fetchFavoritesCats.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      .addCase(thunks.fetchFavoritesDogs.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.favoritesDogs = action.payload;
      })
      .addCase(thunks.fetchFavoritesDogs.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export const actions = animalsSlice.actions;
export default animalsSlice.reducer;

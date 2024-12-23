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
        state.status = 'succeeded';
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
      })
      // Agregar casos para eliminar favoritos
      .addCase(thunks.removeFavoriteCat.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(thunks.removeFavoriteCat.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.favoritesCats = state.favoritesCats.filter(
          (cat) => cat.id !== action.payload
        );
      })
      .addCase(thunks.removeFavoriteCat.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      .addCase(thunks.removeFavoriteDog.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(thunks.removeFavoriteDog.fulfilled, (state, action) => {
        state.status = 'succeeded';
        // Eliminar el perro favorito usando el id retornado
        state.favoritesDogs = state.favoritesDogs.filter(
          (dog) => dog.id !== action.payload
        );
      })
      .addCase(thunks.removeFavoriteDog.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      .addCase(thunks.fetchCatById.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(thunks.fetchCatById.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.cat = action.payload;
      })
      .addCase(thunks.fetchCatById.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      .addCase(thunks.fetchDogById.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(thunks.fetchDogById.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.dog = action.payload;
      })
      .addCase(thunks.fetchDogById.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export const actions = animalsSlice.actions;
export default animalsSlice.reducer;

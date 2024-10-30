import { createAsyncThunk } from '@reduxjs/toolkit';
import CatService from '../../../services/cat/CatService';
import DogService from '../../../services/dog/DogService';

export const thunks = {
  fetchCats: createAsyncThunk(
    'cats/fetchCats',
    async ({ page }, { rejectWithValue }) => {
      try {
        const response = await CatService.getCats(page);
        return response;
      } catch (error) {
        return rejectWithValue(error.response?.data || 'Error fetching cats');
      }
    }
  ),
  
  postFavoriteCat: createAsyncThunk(
    'cats/postFavoriteCat',
    async ({ favorite }, { rejectWithValue }) => {
      if (!favorite?.image_id) {
        return rejectWithValue('El objeto favorito no contiene un image_id válido.');
      }
      try {
        const res = await CatService.postCatFavorite(favorite);
        return res;
      } catch (error) {
        return rejectWithValue(error.response?.data || 'Error posting favorite cat');
      }
    }
  ),
  
  
  fetchFavoritesCats: createAsyncThunk(
    'cats/fetchFavoritesCats',
    async ({ subId }, { rejectWithValue }) => {
      try {
        const response = await CatService.getCatFavorites(subId); // Asegúrate de que tu método CatService tenga el soporte necesario
        return response;
      } catch (error) {
        return rejectWithValue(error.response?.data || 'Error fetching favorites by sub ID');
      }
    }
  ),

  fetchCatById: createAsyncThunk(
    'cats/fetchCatById',
    async ({ id }, { rejectWithValue }) => {
      try {
        const response = await CatService.getCatById(id);
        return response;
      } catch (error) {
        return rejectWithValue(error.response?.data || 'Error fetching cat by ID');
      }
    }
  ),
  
  // Nueva función para eliminar un gato favorito
  removeFavoriteCat: createAsyncThunk(
    'cats/removeFavoriteCat',
    async ({ id }, { rejectWithValue }) => {
      try {
        await CatService.deleteFavoriteCat(id); // Llama al método
        return id; // Retorna el id del gato que se eliminó
      } catch (error) {
        return rejectWithValue(error.response?.data || 'Error deleting cat');
      }
    }
  ),

  fetchDogs: createAsyncThunk(
    'cats/fetchDogs',
    async ({ page }, { rejectWithValue }) => {
      try {
        const response = await DogService.getDogs(page);
        return response;
      } catch (error) {
        return rejectWithValue(error.response?.data || 'Error fetching dogs');
      }
    }
  ),

  fetchFavoritesDogs: createAsyncThunk(
    'cats/fetchFavoritesDogs',
    async (_, { rejectWithValue }) => {
      try {
        const response = await DogService.getDogFavorites();
        return response;
      } catch (error) {
        return rejectWithValue(error.response?.data || 'Error fetching favorite dogs');
      }
    }
  ),
  
  postFavoriteDog: createAsyncThunk(
    'cats/postFavoriteDog',
    async ({ favorite }, { rejectWithValue }) => {
      try {
        const response = await DogService.postDogFavorite(favorite);
        return response;
      } catch (error) {
        return rejectWithValue(error.response?.data || 'Error posting favorite dog');
      }
    }
  ),

  fetchDogById: createAsyncThunk(
    'cats/fetchDogById',
    async ({ id }, { rejectWithValue }) => {
      try {
        const response = await DogService.getDogById(id);
        return response;
      } catch (error) {
        return rejectWithValue(error.response?.data || 'Error fetching dog by ID');
      }
    }
  ),
  
  // Nueva función para eliminar un perro favorito
  removeFavoriteDog: createAsyncThunk(
    'cats/removeFavoriteDog',
    async ({ id }, { rejectWithValue }) => {
      try {
        await DogService.deleteFavoriteDog(id); // Llama al método
        return id; // Retorna el id del perro que se eliminó
      } catch (error) {
        return rejectWithValue(error.response?.data || 'Error deleting dog');
      }
    }
  ),
};

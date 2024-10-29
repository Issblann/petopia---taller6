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
      try {
        const res = await CatService.postCatFavorite(favorite);
        return res;
      } catch (error) {
        return rejectWithValue(error.response?.data || 'Error fetching cats');
      }
    }
  ),
  fetchFavoritesCats: createAsyncThunk(
    'cats/fetchFavoritesCats',
    async (_, { rejectWithValue }) => {
      try {
        const favorites = await CatService.getCatFavorites();
        return favorites;
      } catch (error) {
        return rejectWithValue(error.response?.data || 'Error fetching cats');
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
        return rejectWithValue(error.response?.data || 'Error fetching cats');
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
        return rejectWithValue(error.response?.data || 'Error fetching cats');
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
        return rejectWithValue(error.response?.data || 'Error fetching cats');
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
        return rejectWithValue(error.response?.data || 'Error fetching cats');
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
        return rejectWithValue(error.response?.data || 'Error fetching cats');
      }
    }
  ),
};

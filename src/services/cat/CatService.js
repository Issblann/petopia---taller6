import { fetchInterceptor } from '../interceptor/interceptor';

const URL_BASE = 'https://api.thecatapi.com/v1/images';
const URL_BASE_FAVORITES = 'https://api.thecatapi.com/v1/favourites';

class CatService {
  constructor() {
    this.baseUrl = URL_BASE;
  }

  async getCats(page = 0) {
    try {
      const apiKey = import.meta.env.VITE_CAT_API_KEY;
      const getCats = `${this.baseUrl}/search?&page=${page}&limit=25&has_breeds=true&order=RANDOM`;
      const res = await fetchInterceptor(apiKey).get(getCats);
      return res.data;
    } catch (error) {
      throw new Error(`Status code ${error}`);
    }
  }

  async getCatById(id) {
    try {
      const apiKey = import.meta.env.VITE_CAT_API_KEY;
      const res = await fetchInterceptor(apiKey).get(`${URL_BASE}/${id}`);
      return res.data;
    } catch (error) {
      throw new Error(`Status code ${error}`);
    }
  }

  async postCatFavorite(favorite) {
    try {
      const apiKey = import.meta.env.VITE_CAT_API_KEY;
      const res = await fetchInterceptor(apiKey).post(
        URL_BASE_FAVORITES,
        favorite
      );
      return res.data;
    } catch (error) {
      throw new Error(`Status code ${error}`);
    }
  }

  async getCatFavorites() {
    try {
      const apiKey = import.meta.env.VITE_CAT_API_KEY;
      const res = await fetchInterceptor(apiKey).get(URL_BASE_FAVORITES);
      return res.data;
    } catch (error) {
      throw new Error(`Status code ${error}`);
    }
  }
}

export default new CatService();

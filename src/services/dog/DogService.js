import { fetchInterceptor } from '../interceptor/interceptor';

const URL_BASE = 'https://api.thedogapi.com/v1/images';
const URL_BASE_FAVORITES = 'https://api.thedogapi.com/v1/favourites';

class DogService {
  constructor() {
    this.baseUrl = URL_BASE;
  }

  async getDogs(page = 0) {
    try {
      const apiKey = import.meta.env.VITE_DOG_API_KEY;
      const getDogs = `${this.baseUrl}/search?&page=${page}&limit=25&has_breeds=true&order=RANDOM`;
      const res = await fetchInterceptor(apiKey).get(getDogs);
      return res.data;
    } catch (error) {
      throw new Error(`Status code ${error}`);
    }
  }

  async getDogById(id) {
    try {
      const apiKey = import.meta.env.VITE_DOG_API_KEY;
      const res = await fetchInterceptor(apiKey).get(`${URL_BASE}/${id}`);
      return res.data;
    } catch (error) {
      throw new Error(`Status code ${error}`);
    }
  }

  async postDogFavorite(favorite) {
    try {
      const apiKey = import.meta.env.VITE_DOG_API_KEY;
      const res = await fetchInterceptor(apiKey).post(
        URL_BASE_FAVORITES,
        favorite
      );
      return res.data;
    } catch (error) {
      throw new Error(`Status code ${error}`);
    }
  }

  async getDogFavorites() {
    try {
      const apiKey = import.meta.env.VITE_DOG_API_KEY;
      const res = await fetchInterceptor(apiKey).get(URL_BASE_FAVORITES);
      return res.data;
    } catch (error) {
      throw new Error(`Status code ${error}`);
    }
  }
}

export default new DogService();

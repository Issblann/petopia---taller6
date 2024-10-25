import { fetchInterceptor } from '../interceptor/interceptor';

export const URL_BASE = 'https://api.thedogapi.com/v1/images';
const GET_DOGS = `${URL_BASE}/search?&page=0&limit=25&has_breeds=true&order=ASC`;

class DogService {
  constructor() {
    this.baseUrl = GET_DOGS;
  }

  async getDogs() {
    try {
      const apiKey = import.meta.env.VITE_DOG_API_KEY;
      const res = await fetchInterceptor(apiKey).get(this.baseUrl);
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
}

export default new DogService();

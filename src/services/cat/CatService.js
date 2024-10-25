import { fetchInterceptor } from '../interceptor/interceptor';

const URL_BASE = 'https://api.thecatapi.com/v1/images';
const GET_CATS = `${URL_BASE}/search?&page=0&limit=25&has_breeds=true&order=ASC`;

class CatService {
  constructor() {
    this.baseUrl = GET_CATS;
  }

  async getCats() {
    try {
      const apiKey = import.meta.env.VITE_CAT_API_KEY;
      const res = await fetchInterceptor(apiKey).get(this.baseUrl);
      return res.data;
    } catch (error) {
      throw new Error(`Status code ${error}`);
    }
  }
}

export default new CatService();

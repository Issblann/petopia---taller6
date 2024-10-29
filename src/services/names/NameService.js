import axios from 'axios';

const URL_BASE = 'https://dummyjson.com/users?limit=25&skip=0&select=firstName'; // Aumentar el skip cada 25 registros para paginacion

class NameService {
  constructor() {
    this.baseUrl = URL_BASE;
  }

  async getNames() {
    try {
      const res = await axios.get(this.baseUrl);
      return res.data.users;
    } catch (error) {
      throw new Error(`Status code ${error}`);
    }
  }
}

export default new NameService();

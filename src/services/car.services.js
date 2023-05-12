import axios from 'axios';

const baseUrl = axios.create({
  baseURL: 'http://localhost:3000/cars',
});

export const CarServices = {
  async getAll() {
    const cars = await baseUrl();
    return cars.data;
  },
  async getCar(id) {
    try {
      const car = await baseUrl(id);
      return car.data;
    } catch (error) {
      throw Error(error);
    }
  },

  async addCar(obj) {
    return await baseUrl.post('/',obj);
    
  },
};

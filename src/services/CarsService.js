import { axiosObj } from "./AxiosService";

class CarsService {
  async getAll() {
    try {
      const response = await axiosObj.get("/cars");
      return response.data;
    } catch (error) {
      console.log("Something went wrong", error);
    }
    return [];
  }
  async create(newCar) {
    try {
      const { data } = await axiosObj.post("/cars", newCar);
      return data;
    } catch (error) {
      console.log("Something went wrong", error);
    }
  }
  async getCar(id) {
    try {
      const response = await axiosObj.get(`/cars/${id}`);
      return response.data;
    } catch (error) {
      console.log("Something went wrong", error);
    }
    return [];
  }
  async edit(id, car) {
    try {
      const data = await axiosObj.put(`/cars/${id}`, car);
    } catch (error) {
      console.log("Something went wrong", error);
    }
  }
}

export default new CarsService();

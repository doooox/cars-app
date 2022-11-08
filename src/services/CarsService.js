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
    const { data } = await axiosObj.post("cars", newCar);
    return data;
  }
}

export default new CarsService();

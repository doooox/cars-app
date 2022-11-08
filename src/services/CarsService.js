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
}

export default new CarsService();

import axios from "axios";

class AxiosService {
  constructor() {
    this.axiosInstance = axios.create({
      baseURL: "http://localhost:3000/api",
    });
  }
}

export const axiosObj = new AxiosService().axiosInstance;

import axios from "axios";
const apiClient = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "734682063adc4732a9050b455fc79f5f",
  },
});
export default apiClient;

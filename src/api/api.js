import axios from "axios";

const api = axios.create({ baseURL: "http://localhost:5000" });

export const getList = async (rota) => {
  const response = await api.get(rota);
  return response.data;
};

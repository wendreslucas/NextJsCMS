import axios from "axios";

export const apiDato = axios.create({
  baseURL: process.env.API_URL,
});

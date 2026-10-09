import axios from "axios";

const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

export const newsApi = axios.create({
  baseURL: "https://newsapi.org/v2",
});

export { API_KEY };
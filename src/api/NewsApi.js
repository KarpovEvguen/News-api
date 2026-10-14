import axios from "axios";

export const newsApi = axios.create({
  baseURL: "https://freenewsapi.ai/v1",
});
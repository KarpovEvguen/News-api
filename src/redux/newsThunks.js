import { createAsyncThunk } from "@reduxjs/toolkit";
import { newsApi, API_KEY } from "../api/NewsApi";

export const fetchTopHeadlines = createAsyncThunk(
  "news/fetchTopHeadlines",
  async (category = "technology", thunkAPI) => {
    try {
      const response = await newsApi.get("/top-headlines", {
        params: {
          country: "us",
          category,
          apiKey: API_KEY,
        },
      });

      return response.data.articles;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || error.message
      );
    }
  }
);

export const searchNews = createAsyncThunk(
  "news/searchNews",
  async (query, thunkAPI) => {
    try {
      const response = await newsApi.get("/everything", {
        params: {
          q: query,
          sortBy: "publishedAt",
          language: "en",
          apiKey: API_KEY,
        },
      });

      return response.data.articles;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || error.message
      );
    }
  }
);
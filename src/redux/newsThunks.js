import { createAsyncThunk } from "@reduxjs/toolkit";
import { newsApi } from "../api/NewsApi";


const normalizeArticles = (articles = []) => {
  return articles.map((article) => ({
    ...article,
    title: article.title,
    description: article.description || "",
    url: article.url,
    urlToImage: article.image || null,
    publishedAt: article.published_at,
    source: {
      name: article.sitename || article.host || "Unknown source",
    },
  }));
};

export const fetchTopHeadlines = createAsyncThunk(
  "news/fetchTopHeadlines",
  async (category = "technology", thunkAPI) => {
    try {
      const response = await newsApi.get("/search", {
        params: {
          q: category === "general" ? "news" : category,
          country: "US",
          lang: "en",
          date: "7d",
          sort: "date",
          size: 10,
        },
      });

      return normalizeArticles(response.data.results);
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
      const response = await newsApi.get("/search", {
        params: {
          q: query,
          lang: "en",
          date: "7d",
          sort: "date",
          size: 10,
        },
      });

      return normalizeArticles(response.data.results);
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || error.message
      );
    }
  }
);
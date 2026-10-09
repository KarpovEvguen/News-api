

import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { fetchTopHeadlines, searchNews } from "./newsThunks";

const initialState = {
  articles: [],
  status: "idle",
  error: null,
};

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchTopHeadlines.fulfilled, (state, action) => {
        state.articles = action.payload;
      })

      .addCase(searchNews.fulfilled, (state, action) => {
        state.articles = action.payload;
      })

      .addMatcher(
        isAnyOf(
          fetchTopHeadlines.pending,
          searchNews.pending
        ),
        (state) => {
          state.status = "loading";
          state.error = null;
        }
      )

      .addMatcher(
        isAnyOf(
          fetchTopHeadlines.fulfilled,
          searchNews.fulfilled
        ),
        (state) => {
          state.status = "succeeded";
        }
      )

      .addMatcher(
        isAnyOf(
          fetchTopHeadlines.rejected,
          searchNews.rejected
        ),
        (state, action) => {
          state.status = "failed";
          state.error = action.payload;
        }
      );
  },
});

export default newsSlice.reducer;
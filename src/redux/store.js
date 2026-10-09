

import { configureStore } from "@reduxjs/toolkit";
import newsReducer from "../redux/newsSlice";
import favoritesReducer from "../redux/favoritesSlice";

import storage from "redux-persist/es/storage";
import { persistReducer, persistStore } from "redux-persist";

const favoritesPersistConfig = {
  key: "favorites",
  storage,
};

const persistedFavoritesReducer = persistReducer(
  favoritesPersistConfig,
  favoritesReducer
);

export const store = configureStore({
  reducer: {
    news: newsReducer,
    favorites: persistedFavoritesReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
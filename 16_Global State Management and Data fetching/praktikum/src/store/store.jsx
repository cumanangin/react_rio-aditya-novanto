import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import todoSlice from "./todoSlice";
import storage from "redux-persist/lib/storage";
import {
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER
  } from "redux-persist";

const reducers = combineReducers({
  todo: todoSlice,
});

const persistConfig = {
  key: "root",
  storage,
};

const blackListedAction = [FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER
];

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({ 
    reducer: persistedReducer,
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [...blackListedAction]
      }
    }),
  devTools: process.env.NODE_ENV !== "production"
});
const persistor = persistStore(store);

export { store, persistor };

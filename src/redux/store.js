import { configureStore } from '@reduxjs/toolkit';
import { contactsApi, filterSlice } from './contactsApi';

export const store = configureStore({
  reducer: {
    [contactsApi.reducerPath]: contactsApi.reducer,
    [filterSlice.name]: filterSlice.reducer,
  },

  middleware: getDefaultMiddleWare => [
    ...getDefaultMiddleWare(),
    contactsApi.middleware,
  ],
});

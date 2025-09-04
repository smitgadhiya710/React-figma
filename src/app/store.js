// import { configureStore } from "@reduxjs/toolkit";
// import { api } from "../feature/apiSlice";
// import { setupListeners } from "@reduxjs/toolkit/query";

// export const store = configureStore({
//   reducer: {
//     [api.reducerPath]: api.reducer,
//   },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware().concat(api.middleware),
// });

// // setupListeners(store.dispatch);

import { configureStore } from "@reduxjs/toolkit";
import { api } from "../feature/apiSlice";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

setupListeners(store.dispatch);

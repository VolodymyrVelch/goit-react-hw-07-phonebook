import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  // забираємо помилки з консолі  уникаючи перерахованих екшенів
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { persistedPhonebookReducer } from './phonebookSlice';

export const store = configureStore({
  reducer: {
    phonebooks: persistedPhonebookReducer,
  },
  // виключення вищевказаних екшенів з запитів
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {colorsSlice, configSlice} from '@redux/slices';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistStore, persistReducer} from 'redux-persist';
import logger from 'redux-logger';
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  version: 1,
  blacklist: ['loading', 'error', 'network'],
};

const reducers = combineReducers({
  colors: colorsSlice,
  configs: configSlice,
});

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({serializableCheck: false}).concat(logger),
});

export const persistor = persistStore(store);
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

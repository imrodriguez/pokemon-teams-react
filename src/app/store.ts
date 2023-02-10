import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import pokemonReducer from "./pokemonReducer";
import teamReducer from "./teamReducer";

export const store = configureStore({
  reducer: {
    pokemon: pokemonReducer,
    team: teamReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Pokemon } from "../types/pokemon";
import { RootState } from "./store";

export interface TeamState {
  team: (Pokemon | undefined)[];
  selectingPosition: number | null;
}

const initialState: TeamState = {
  team: Array.from(Array(6)),
  selectingPosition: null,
};

export const teamSlice = createSlice({
  name: "team",
  initialState,
  reducers: {
    addToTeam: (
      state,
      action: PayloadAction<{ index: number; pokemon: Pokemon }>,
    ) => {
      const newArray = [...state.team];
      newArray[action.payload.index] = action.payload.pokemon;
      state.team = newArray;
      state.selectingPosition = null;
    },
    removeFromTeam: (state, action: PayloadAction<number>) => {
      state.team[action.payload] = undefined;
    },
    startSelectingPosition: (state, action: PayloadAction<number>) => {
      state.selectingPosition = action.payload;
    },
    stopSelectingPosition: (state) => {
      state.selectingPosition = null;
    },
  },
});

export const selectSelectingPosition = (state: RootState) =>
  state.team.selectingPosition;
export const selectTeam = (state: RootState) => state.team.team;

export const {
  addToTeam,
  removeFromTeam,
  startSelectingPosition,
  stopSelectingPosition,
} = teamSlice.actions;

export default teamSlice.reducer;

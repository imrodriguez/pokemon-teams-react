import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getPokemon, listPokemon } from "../services/pokemon";
import { Pokemon } from "../types/pokemon";
import { RootState } from "./store";

export interface PokemonState {
  pokemons: Pokemon[];
  selectedPokemon: Pokemon | null;
  status: "idle" | "loading" | "failed";
  searchResults: Pokemon[];
}

const initialState: PokemonState = {
  selectedPokemon: null,
  pokemons: [],
  status: "idle",
  searchResults: [],
};

export const fetchPokemon = createAsyncThunk(
  "pokemon/fetchPokemon",
  async () => {
    const response = await listPokemon();
    return await Promise.all(
      response.results.map(async (pokemon: any) => {
        const pokemonDetails = await getPokemon(pokemon.url);
        return pokemonDetails;
      }),
    );
  },
);

export const selectPokemons = (state: RootState) => state.pokemon.pokemons;
export const selectStatus = (state: RootState) => state.pokemon.status;
export const selectSearchResults = (state: RootState) =>
  state.pokemon.searchResults;

export const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    selectPokemon: (state, action: PayloadAction<Pokemon>) => {
      state.selectedPokemon = action.payload;
    },
    unselectPokemon: (state) => {
      state.selectedPokemon = null;
    },
    searchPokemon: (state, action: PayloadAction<string>) => {
      const searchValue = action.payload.toLowerCase();
      state.searchResults = state.pokemons.filter((pokemon) => {
        return pokemon.name.toLowerCase().includes(searchValue);
      });
    },
    resetSearchResults: (state) => {
      state.searchResults = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPokemon.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPokemon.fulfilled, (state, action) => {
        state.status = "idle";
        state.pokemons = action.payload;
      })
      .addCase(fetchPokemon.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const {
  selectPokemon,
  unselectPokemon,
  searchPokemon,
  resetSearchResults,
} = pokemonSlice.actions;

export default pokemonSlice.reducer;

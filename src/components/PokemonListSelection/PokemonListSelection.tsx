import { useState } from "react"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { selectPokemons, selectSearchResults, searchPokemon, resetSearchResults } from "../../app/pokemonReducer"
import { selectSelectingPosition, stopSelectingPosition } from "../../app/teamReducer"
import { GridPokemon } from "../GridPokemon"
import { PanelFromBottom } from "../PanelFromBottom"
import { PokemonCard } from "../PokemonCard"
import { SelectedPanel } from "../SelectedPanel"
import styles from "./PokemonListSelection.module.css"

export const PokemonListSelection = () => {
    const [search, setSearch] = useState<string>("");
    const pokemon = useAppSelector(selectPokemons);
    const searchResults = useAppSelector(selectSearchResults);
    const selectingPosition = useAppSelector(selectSelectingPosition);
    const dispatch = useAppDispatch();

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
        dispatch(searchPokemon(e.target.value))
    }

    return (
        <>
            <PanelFromBottom open={selectingPosition === null ? false : true} onClose={() => {
                dispatch(stopSelectingPosition())
                dispatch(resetSearchResults())
                setSearch("")
            }}>
                <h1 className={styles.PokemonListSelectionTitle}>Select a pokemon</h1>
                <input onChange={handleSearch} className={styles.Search} type="text" placeholder="Search for a pokemon" />
                <GridPokemon>
                    {search === "" ?
                        pokemon.map((pokemon, index) => <PokemonCard pokemon={pokemon} key={index} />) :
                        searchResults.map((pokemon, index) => <PokemonCard pokemon={pokemon} key={index} />)}
                </GridPokemon>
            </PanelFromBottom>
            <SelectedPanel />
        </>
    )
}
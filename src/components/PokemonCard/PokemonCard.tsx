import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { selectPokemon } from "../../app/pokemonReducer";
import { addToTeam, selectSelectingPosition } from "../../app/teamReducer";
import { Pokemon } from "../../types/pokemon"
import { Type } from "../Type";
import styles from "./PokemonCard.module.css"

interface PokemonCardProps {
    pokemon: Pokemon
}

export const PokemonCard = ({ pokemon }: PokemonCardProps) => {
    const dispatch = useAppDispatch();
    const selectingTeam = useAppSelector(selectSelectingPosition);

    return (<div className={styles.Card} data-testid="pokemoncard">
        <img src={pokemon.sprites.front_default} alt="pokemon" />
        <h2>{pokemon.name}</h2>
        <div className={styles.Types}>
            {pokemon.types.map((type, index) => {
                return (<Type name={type.type.name} key={index} />)
            })
            }
        </div>
        <div className={styles.Buttons}>
            <button data-testid="addtoteam" onClick={() => dispatch(addToTeam({ index: selectingTeam as number, pokemon }))}>Add to team</button>
            <button data-testid="moreinfo" onClick={() => dispatch(selectPokemon(pokemon))}>More info</button>
        </div>
    </div>)
}
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { selectTeam, startSelectingPosition } from "../../app/teamReducer";
import { PokemonListSelection } from "../PokemonListSelection";
import { EmptyPlace } from "./EmptyPlace";
import { PokemonPosition } from "./PokemonPosition";
import styles from "./Team.module.css"

export const Team = () => {
    const team = useAppSelector(selectTeam);

    const dispatch = useAppDispatch();

    return (
        <div data-testid="team">
            <h1>Make your Pokemon team</h1>
            <p>Select the pokemon that you would like to add to your team</p>

            <div className={styles.Team}>
                {team.map((pokemon, index) => {
                    if (!pokemon) {
                        return (
                            <EmptyPlace onClick={() => dispatch(startSelectingPosition(index))} key={index} />
                        )
                    }

                    return (
                        <PokemonPosition pokemon={pokemon} key={index} index={index} />
                    )
                })
                }
            </div>

            <PokemonListSelection />
        </div>
    )
}
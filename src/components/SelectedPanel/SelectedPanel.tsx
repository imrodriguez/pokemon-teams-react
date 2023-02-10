import { useAppDispatch, useAppSelector } from "../../app/hooks"
import {
    Chart as ChartJS,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';
import { unselectPokemon } from "../../app/pokemonReducer";
import { PanelFromBottom } from "../PanelFromBottom/PanelFromBottom";
import { Type } from "../Type";
import styles from "./SelectedPanel.module.css"

ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
);

export const SelectedPanel = () => {
    const selectedPokemon = useAppSelector(state => state.pokemon.selectedPokemon);
    const dispatch = useAppDispatch();

    console.log(selectedPokemon)

    return (<PanelFromBottom open={!!selectedPokemon} onClose={() => {
        dispatch(unselectPokemon())
    }} >
        <img className={styles.PokemonImage} src={selectedPokemon?.sprites.front_default} alt="pokemon" />
        <h1 data-testid="pokemonname" className={styles.PokemonName}>{selectedPokemon?.name}</h1>
        <div className={styles.Extrainfo}>
            <div>
                <h2>Types</h2>
                {selectedPokemon?.types.map((type, index) => {
                    return <Type key={index} name={type.type.name} />
                })}
            </div>

            <div>
                <h2>Abilities</h2>
                {selectedPokemon?.abilities.map((ability, index) => {
                    return <span key={index}>{ability.ability.name}
                        {index !== selectedPokemon.abilities.length - 1 && ", "}
                    </span>
                })
                }
            </div>
        </div>

        <div className={styles.Stats}>
            <h2>Stats</h2>
            <Radar data={{
                labels: selectedPokemon?.stats.map(stat => stat.stat.name),
                datasets: [
                    {
                        label: 'Stats',
                        data: selectedPokemon?.stats.map(stat => stat.base_stat),
                        backgroundColor: 'rgba(255, 99, 132, 0.2)',
                        borderColor: '#888',
                        borderWidth: 1,
                    },
                ],
            }} options={{

                scales: {
                    r: {
                        min: 0,
                        max: 255,
                    }
                },
                plugins: {
                    legend: {
                        display: false
                    }
                }
            }} />
        </div>
    </PanelFromBottom>)
}
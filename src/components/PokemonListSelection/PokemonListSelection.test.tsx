import { fireEvent, render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import { test, expect } from 'vitest'
import { fetchPokemon } from '../../app/pokemonReducer'
import { store } from '../../app/store'
import { startSelectingPosition } from '../../app/teamReducer'
import { PokemonListSelection } from './PokemonListSelection'

test("renders PokemonListSelection component", async () => {
    render(<Provider store={store}><PokemonListSelection /></Provider>)
    store.dispatch(startSelectingPosition(0))

    await screen.findByText("Select a pokemon")

    expect(screen.getByText("Select a pokemon")).toBeInTheDocument()
})

test("add to team works ", async () => {
    render(<Provider store={store}><PokemonListSelection /></Provider>)
    store.dispatch(fetchPokemon())
    store.dispatch(startSelectingPosition(0))

    await screen.findByText("Select a pokemon")
    await screen.findByText("bulbasaur")
    const firstPokemon = await document.querySelectorAll('[data-testid="pokemoncard"]')[0]
    fireEvent.click(firstPokemon.querySelector('button[data-testid="addtoteam"]') as Element)

    expect(store.getState().team?.team[0]?.name).toBe("bulbasaur")
})


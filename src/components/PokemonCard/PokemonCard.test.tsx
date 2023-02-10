import { render, screen } from '@testing-library/react'
import { test, expect } from 'vitest'
import { PokemonCard } from './PokemonCard'
import pokemonMock from '../../mocks/pokemon.json'
import { Provider } from 'react-redux'
import { store } from '../../app/store'

test("renders PokemonCard component", async () => {
    render(<Provider store={store}><PokemonCard pokemon={pokemonMock} /></Provider>)
    expect(screen.getByText("bulbasaur")).toBeInTheDocument()
})


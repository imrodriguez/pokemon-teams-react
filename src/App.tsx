import { useEffect } from 'react'
import { useAppSelector, useAppDispatch } from "./app/hooks";
import { fetchPokemon, selectStatus } from './app/pokemonReducer';
import { Team } from './components/Team';
import { Loading } from './components/Loading';

function App() {
  const status = useAppSelector(selectStatus);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchPokemon())
  }, [])

  if (status === 'loading') return <Loading />

  return (
    <div className="App">
      <Team />
    </div>
  )
}

export default App

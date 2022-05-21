/* eslint-disable no-console */
import { useState, useEffect } from 'react';
import PokemonList from './PokemonList';
import { getPokemons } from './services/fetch-utils';
import Spinner from './Spinner';

export default function PokemonSearch() {
      // you'll need to track your pokemon search results, the loading state, and one form field: name. For this form field, set a real initial values (like 'pikachu') so the form populates with a default value.
  const [pokemons, setPokemons] = useState([]);
  const [name, setName] = useState('pikachu');
  const [isLoading, setIsLoading] = useState(false);

  async function load() {
    setIsLoading(true);
    const data = await getPokemons(name);
    setPokemons(data.data.results);
    setIsLoading(false);
  }

  useEffect(() => {
    load();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function handlePokemonSubmit(e) {
    e.preventDefault();
    load();
  }

  console.log(pokemons);

  return (
    <section className='pokemon'>
      {/* make the fetch on submit */}
      <form onSubmit={handlePokemonSubmit}>
            Search pokemon for a city
        {/* add inputs/labels for the pokemon name, using all the things we need with react forms. Don't forget to use the value property to sync this up with the default value in react state */}
        <input value={name} onChange={(e) => setName(e.target.value)}></input>
        <button>Get pokemon</button>
      </form>
      {/* Make a PokemonList component to import and use here. Use a ternery to display a loading spinner (make a <Spinner /> component for this) if the data is still loading. */}
      {
        isLoading
          ? <Spinner />
          : <PokemonList pokemons={pokemons} />
      }
    </section>
  );

}

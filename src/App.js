import { useEffect, useState } from "react";
import PokePics from "./components/PokePics";
import './App.css';


function App() {
  const [allPoke, setAllPoke] = useState([]);
  const [loadMore, setLoadMore] = useState('https://pokeapi.co/api/v2/pokemon?limit=10');

  const getPokemons = async () => {
    const response = await fetch(loadMore);
    const data = await response.json();

    setLoadMore(data.next)
    console.log(data);

    function createPokemons(results) {
      results.forEach(async pokemon => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`);
        const data = await res.json();

        setAllPoke(list => [...list, data])
        // allPoke.push(data)      
      })
    }
    createPokemons(data.results);
  }

  useEffect(() => {
    getPokemons()
  }, []);

  return (
    <div className="div-cotainer">
      <h1>
        <img className="logo-pokemon" src="https://cdn.discordapp.com/attachments/929862302537232484/946830595118477312/Pokemon.png" alt="Pokemon logo"/>
      </h1>

      <div className="div-poke-container">
        <div className="div-all-pokemons">
          {allPoke.map((pokemon, index) => 
            < PokePics 
            key={index}
            id={pokemon.id}
            image={pokemon.sprites.other.dream_world.front_default}
            name={pokemon.name}
            type={pokemon.types[0].type.name}
            />
          )}
        </div>
      </div>

      <button className="load-more-button" onClick={()=> getPokemons()}>
        Load more
        <div className="button__horizontal"></div>
        <div className="button__vertical"></div>
      </button>
      <footer>
        <p>
          Projeto realizado para fins didáticos com React.js
        </p>
        <p>
          Requisição feita pela pokeapi.
        </p>
      </footer>
    </div>
  );
}

export default App;

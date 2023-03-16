import { useState, useEffect, useContext } from "react"
import { DataContext } from "../contexts/DataProvider"


export default function Pokemon(){
    const [pokemonData, setPokemonData] = useState({})
    const [loadingState, setLoadingState] = useState("Loading")
    const [pokemonId, setPokemonId] = useState(1)
    const [currsearch, setCurrSearch] = useState(1)
    const {getPokemonData} = useContext(DataContext)

    function increment (incrementor){
        setPokemonId(pokemonId + incrementor)
    }

    useEffect(() => {
        async function handleLoad(){
            const data = await getPokemonData(pokemonId)
            setPokemonData(data)
            setLoadingState('Loaded')
        }
        handleLoad()
    }, [pokemonId])

    function handleSearch(e){
        e.preventDefault()
        setPokemonId(currsearch)
    }

    return (
        <div>
            <h1>Pokemon</h1>
            <form onSubmit={(e) => handleSearch(e)}>
                <input type="number" name="id" id="id" placeholder="Set Pokemon Id" value={pokemonId} onChange={(e)=>(setCurrSearch(parseInt(e.target.value)))}min={1} max={1010}/>
                <button>Search</button>
            </form>
            {
                (loadingState === "Loading") ? 
                <p>Loading...</p> :
                <div className="pokemon">
                    <img src={pokemonData.sprites.front_default} alt="" />
                    <h2>{pokemonData.name}</h2>
                    {
                        (pokemonId > 1) ?
                        <button onClick={() => increment(-1)}>Previous</button>
                        :
                        <></>
                    }
                    
                    <button onClick={() => increment(1)}>Next</button>
                </div>
            }
        </div>
    )
}
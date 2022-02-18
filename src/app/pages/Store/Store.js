import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import Card from "../../components/Card/Card";

import { useSelector } from "react-redux";

export default function Home() {
  // const [pokemons, setPokemons] = useState([]);

  // const callPokemons = async () => {
  //   const pokemonData = await getPokemons();
  //   setPokemons(pokemonData);
  // };

  // useEffect(() => {
  //   callPokemons();
  // }, []);
  const pokeFavs = useSelector((state) => state.addOrRemovePokeFavs.pokemons);

  return (
    <>
      <Header />
      <section className="container">
        {pokeFavs.map((pokemon, index) => (
          <Card {...pokemon} key={index} />
        ))}
      </section>
    </>
  );
}

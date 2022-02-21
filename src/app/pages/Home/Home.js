import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import Card from "../../components/Card/Card";

import { getPokemons } from "../../services/getPokemons";

export default function Home() {
  const [pokemons, setPokemons] = useState([]);

  const callPokemons = async () => {
    const pokemonData = await getPokemons();
    setPokemons(pokemonData);
  };

  useEffect(() => {
    callPokemons();
  }, []);

  return (
    <>
      <Header />
      <section className="container">
        {pokemons.map((pokeCard, index) => (
          <Card {...pokeCard} key={index} />
        ))}
      </section>
    </>
  );
}

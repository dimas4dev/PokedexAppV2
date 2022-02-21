import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import Card from "../../components/Card/Card";
import Footer from "../../components/Footer/Footer";

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
      <section className="home">
        <h1 className="home-heading">Pick your Pokemon</h1>
        <div className="home-container">
          {pokemons.map((pokeCard, index) => (
            <Card {...pokeCard} key={index} />
          ))}
        </div>
        <div className="home-pagination">
          <button className="home-btn">Previous</button>
          <button className="home-btn">Next</button>
        </div>
      </section>
      <Footer />
    </>
  );
}

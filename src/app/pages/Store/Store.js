import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Header from "../../components/Header/Header";
import Card from "../../components/Card/Card";
import Footer from "../../components/Footer/Footer";

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
      <Footer />
    </>
  );
}

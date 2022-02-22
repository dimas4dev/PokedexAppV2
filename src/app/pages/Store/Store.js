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
      <section className="store">
        <h1 className="store-heading">Cart</h1>
        <div className="home-container">
          {pokeFavs.map((pokemon, index) => (
            <Card {...pokemon} key={index} />
          ))}
        </div>
        <div className="store-pagination">
          <button className="store-btn">Previous</button>
          <button className="store-btn">Next</button>
        </div>
      </section>
      <Footer />
    </>
  );
}

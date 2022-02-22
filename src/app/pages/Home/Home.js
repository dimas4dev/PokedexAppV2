import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { obtainPokemons } from "../../redux/actions";
import Header from "../../components/Header/Header";
import Card from "../../components/Card/Card";
import Footer from "../../components/Footer/Footer";

export default function Home() {
  const dispatch = useDispatch();
  const pokemons = useSelector(
    (state) => state.initialPokemons.pokemons.pokemonData
  );
  const nextP = useSelector((state) => state.initialPokemons.pokemons.nextPage);
  const prevP = useSelector((state) => state.initialPokemons.pokemons.prevPage);

  useEffect(() => {
    dispatch(obtainPokemons());
  }, [dispatch]);

  return (
    <>
      <Header />
      <section className="home">
        <h1 className="home-heading">Pick your Pokemon</h1>
        <div className="home-container">
          {pokemons?.map((pokeCard, index) => (
            <Card {...pokeCard} key={index} />
          ))}
        </div>
        <div className="home-pagination">
          <button
            onClick={() => {
              dispatch(obtainPokemons(prevP));
            }}
            className="home-btn"
          >
            Previous
          </button>
          <button
            onClick={() => {
              dispatch(obtainPokemons(nextP));
            }}
            className="home-btn"
          >
            Next
          </button>
        </div>
      </section>
      <Footer />
    </>
  );
}

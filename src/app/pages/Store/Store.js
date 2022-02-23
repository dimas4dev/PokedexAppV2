import { useSelector } from "react-redux";
import Header from "../../components/Header/Header";
import Card from "../../components/Card/Card";
import Footer from "../../components/Footer/Footer";

export default function Store() {
  const pokeFavs = useSelector((state) => state.addOrRemovePokeFavs.pokemons);

  // const pokemons = useSelector(
  //   (state) => state.initialPokemons.pokemons.pokemonData
  // );

  //id, name, types, height, weight, sprites

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

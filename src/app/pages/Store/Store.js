import { useSelector } from "react-redux";
import Header from "../../components/Header/Header";
import Card from "../../components/Card/Card";
import Footer from "../../components/Footer/Footer";
import Empty from "../../components/Empty/Empty";

export default function Store() {
  const pokeFavs = useSelector((state) => state.addOrRemovePokeFavs.pokemons);
  console.log(pokeFavs.length);

  return (
    <>
      <Header />
      <section className="store">
        {pokeFavs.length === 0 ? (
          <Empty />
        ) : (
          <>
            <h1 className="store-heading">Cart</h1>
            <div className="store-container">
              {pokeFavs.map((pokemon, index) => (
                <Card {...pokemon} key={index} />
              ))}
            </div>
          </>
        )}
      </section>
      <Footer />
    </>
  );
}

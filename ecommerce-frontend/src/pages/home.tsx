import { Link } from "react-router-dom";
import ProductCard from "../components/product-card";

const Home = () => {
  const addToCartHandler = () => {};

  return (
    <div className="home">
      <section></section>
      <h1>
        Latest Products
        <Link to={"/search"} className="findmore">
          More
        </Link>
      </h1>
      <main>
        <ProductCard
          productId="000001"
          name="Macbook"
          price={120000}
          photo="https://m.media-amazon.com/images/I/71jG+e7roXL._SX679_.jpg"
          stock={100}
          handler={addToCartHandler}
        />
      </main>
    </div>
  );
};

export default Home;

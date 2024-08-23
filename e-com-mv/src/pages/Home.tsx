import Hero from "../components/Hero/Hero";
import ProductCard from "../components/productsCard";

function Home() {
  return (
    <main>
      <Hero />
      <h6 className="text-center mt-4">Featured Products</h6>
      <ProductCard isHomepage={true} />
    </main>
  );
}

export default Home;

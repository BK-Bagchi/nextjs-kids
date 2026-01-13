import Banner from "./components/home/Banner";
import Products from "./components/home/Products";

export default function Home() {
  return (
    <div className="space-y-10">
      <section>
        <Banner />
      </section>
      <section>
        <Products />
      </section>
    </div>
  );
}

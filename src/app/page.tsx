import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Card from "@/components/Card";

function Home() {
  return (
    <>
      <Navbar />
      <div className="cards flex flex-wrap justify-around">
        <Card title="Card 1" description="card 1 description" name="Name: Abdullah" />
        <Card title="Card 2" description="card 2 description" name="Name: Ali" />
        <Card title="Card 3" description="card 3 description" name="Name: Musa" />
      </div>
      <Footer />
    </>
  );
}
export default Home;

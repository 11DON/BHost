import Features from "../components/features";
import Footer from "../components/footer";
import Banner from "../components/homeBanner";
import LatesCustomers from "../components/latestCustomers";
import CustomNavbar from "../components/navbar"; 
import Values from "../components/values";

export default function HomePage() {
  return (
    <div >
      <CustomNavbar />
      <Banner />
      <Features />
      <Values />
      <LatesCustomers />
        <Footer />
    </div>
  );
}

import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import FeaturedDishes from "./components/FeatureDishes";
import Reservations from "./components/Reservations";
import Footer from "./components/Footer";
import MobileNav from "./components/MobileNav";

const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <FeaturedDishes />
      <Reservations />
      <Footer />
      <MobileNav />
    </div>
  );
};

export default App;
import * as React from "react";
import Hero from "../components/hero3";
import Navbar from "../components/navbar";
import Cards from "../components/cards";
import Footer from "../components/footer";

export default function IndexPage() {
  return (
    <div className="relative bg-gray-50">
      <Navbar />
      <Hero />
      <Cards />
      <Footer />
    </div>
  );
}

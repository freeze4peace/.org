import * as React from "react";
import Hero from "../components/hero";
import Navbar from "../components/navbar";

export default function IndexPage() {
  return (
    <div className="relative bg-gray-50">
      <Navbar />

      <Hero />
    </div>
  );
}

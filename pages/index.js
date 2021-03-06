import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import Cards from "../components/cards";
import Footer from "../components/footer";
import Details from "../components/details";
import Contact from "../components/contact";

export default function Home() {
  return (
    <div className="relative">
      <div className="hidden bg-yellow-btn bg-blue-btn"></div>
      <Head>
        <title>Freeze 4 Peace</title>
        <meta name="description" content="Freeze for peace" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Hero />
      <Cards />
      <Details />
      <Contact />
      <Footer />
    </div>
  );
}

import Image from "next/image";
import peaceImage from "../images/peace.png";

// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from "react-responsive-carousel";

export default function Hero() {
  return (
    <main className="mx-auto lg:relative max-w-7xl recursive-font">
      <div className="w-full pt-16 pb-20 mx-auto text-center max-w-7xl lg:py-24 lg:text-left">
        <div className="px-4 lg:w-1/2 sm:px-8 xl:pr-16">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
            <span className="block text-5xl">Our Mission</span>{" "}
            <span className="block text-3xl text-blue-500">
              less Russian fuel imports
            </span>
          </h1>
          <p className="max-w-md mx-auto mt-3 text-xl md:mt-5 md:max-w-3xl">
            create awareness on how we can do our part to put pressure on Putin
            by dialling down our heatings.
          </p>
        </div>
      </div>
      <div className="relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full">
        <Image
          src={peaceImage}
          alt="Peace"
          className="inset-0 object-cover w-full h-full"
          // width={500} automatically provided
          // height={500} automatically provided
          // blurDataURL="data:..." automatically provided
          // placeholder="blur" // Optional blur-up while loading
        />
        {/* <StaticImage
          src="../images/peace.png"
          alt="Freeze for peace logo"
          placeholder="blurred"
          quality="100"
          className="inset-0 object-cover w-full h-full"
          backgroundColor="transparent"
        /> */}
        {/* <Carousel
          infiniteLoop="true"
          autoPlay={true}
          showStatus={false}
          showThumbs={false}
        >
          <img src="https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80" />
          <img src="https://images.unsplash.com/photo-1640622307985-eaa37b36077f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80" />
          <img src="https://images.unsplash.com/photo-1580894732444-8ecded7900cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80" />
        </Carousel> */}
      </div>
    </main>
  );
}

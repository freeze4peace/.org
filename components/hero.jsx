import Image from "next/image";
import peaceImage from "../images/peace.png";

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
        <Image src={peaceImage} alt="Peace" placeholder={false} layout="fill" />
      </div>
    </main>
  );
}

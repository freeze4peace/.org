import Image from "next/image";
import PutInImage from "../images/Put in.png";

export default function Details() {
  return (
    <main className="mx-auto lg:flex lg:relative max-w-7xl recursive-font">
      {/* <div className="relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full">
      </div> */}
      <div className="flex items-center justify-center w-full pt-16 pb-20 mx-auto lg:w-1/2">
        <Image src={PutInImage} alt="PutIn" />
      </div>
      <div className="flex items-center w-full px-12 mx-auto lg:w-1/2">
        <div>
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
            <div className="text-3xl ">
              Let&apos;s hit Putin where it hurts!
            </div>{" "}
            <div className="text-3xl text-blue-500 ">
              right in the fossil fuels.
            </div>
          </h1>
          <div className="pt-6 space-y-4">
            <p>
              Russia&apos;s most important exports by more then 100B compared to
              the next highest categories (grains and timber) are its mineral
              fuels: oil, gas & coal.
            </p>
            <p>
              They add up to at least 60% of the nations income and are
              therefore a main driver of Putin&apos;s war efforts.
            </p>
            <p>
              Help us quickly spread the word to as many households as possible
              to freeze for peace together.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

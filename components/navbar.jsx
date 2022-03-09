// import { StaticImage } from "gatsby-plugin-image";
import Image from "next/image";
import downloadBtn from "../images/download-btn.png";
import logoImage from "../images/logo.svg";
import mobileLogoImage from "../images/mobile-logo.svg";

export default function Navbar() {
  return (
    <div className="sticky mx-auto bg-white shadow">
      <div className="px-4 mx-auto max-w-7xl sm:px-6">
        <div className="flex items-center justify-center py-4 md:justify-start md:space-x-10">
          <div className="md:hidden">
            <Image
              src={mobileLogoImage}
              alt="Freeze for peace logo"
              className="absolute w-48 top-1"
            />
          </div>

          <div className="justify-start hidden md:flex md:w-0 md:flex-1">
            <a href="#">
              <span className="sr-only">Freeze for peace</span>
              <Image
                src={logoImage}
                alt="Freeze for peace logo"
                className="absolute w-24 top-1"
              />
            </a>
          </div>
          {/* <div className="-my-2 -mr-2 md:hidden">
              <Popover.Button className="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                <span className="sr-only">Open menu</span>
                <MenuIcon className="w-6 h-6" aria-hidden="true" />
              </Popover.Button>
            </div> */}
          <nav className="hidden space-x-10 text-5xl font-bold md:flex recursive-font">
            Freeze for peace
          </nav>
          <div className="items-center justify-end hidden md:flex md:flex-1 lg:w-0">
            <button className="focus:bg-transparent">
              <Image src={downloadBtn} />
            </button>
            {/* <a
                href="#"
                className="text-base font-medium text-gray-500 whitespace-nowrap hover:text-gray-900"
              >
                Language
              </a> */}
          </div>
        </div>
      </div>
    </div>
  );
}

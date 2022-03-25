import { ClipboardListIcon } from "@heroicons/react/outline";
import Image from "next/image";
import InfoIcon from "../images/info-icon.svg";

export default function StatBlock({ statText, icon, title, text, onClick }) {
  return (
    <div
      className="flex flex-col items-center justify-between cursor-pointer recursive-font hover:drop-shadow-2xl hover:scale-105"
      onClick={() => (typeof onClick === "function" ? onClick() : null)}
    >
      <div className="flex items-center justify-between pl-6 pr-12 text-3xl font-bold text-white bg-center bg-no-repeat bg-contain h-36 w-80 bg-yellow-btn">
        <div className="w-20 h-full">
          <Image src={icon} alt={statText} />
        </div>
        <div className="text-5xl custom-txt-shadow">{statText}</div>
      </div>
      <div className="w-64 px-4">
        <div className="w-full text-xl font-bold text-blue-500">{title}</div>
        <p>{text}</p>
      </div>
      <div className="w-12 pt-6">
        <Image src={InfoIcon} />
      </div>
    </div>
  );
}

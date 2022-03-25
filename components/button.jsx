import Image from "next/image";

export default function Button({ color = "blue", icon, text }) {
  return (
    <div
      className={`cursor-pointer flex items-center justify-center space-x-2 px-8 font-bold text-white h-12 w-48 bg-${color}-btn recursive-font hover:drop-shadow-2xl hover:scale-105 bg-contain bg-no-repeat bg-center`}
    >
      <div className="flex items-center w-6 h-full">
        {icon ? <Image src={icon} alt={text} /> : undefined}
      </div>
      <div className="text-sm custom-txt-shadow">{text}</div>
    </div>
  );
}

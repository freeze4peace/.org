import Image from "next/image";

export default function Button({ color = "blue", icon, text }) {
  return (
    <div
      className={`cursor-pointer flex items-center justify-between space-x-4 px-6 font-bold text-white h-12 w-42 bg-${color}-btn recursive-font hover:drop-shadow-2xl hover:scale-105 bg-contain bg-no-repeat bg-center`}
    >
      <div className="flex items-center w-6 h-full">
        {icon ? <Image src={icon} alt={text} /> : undefined}
      </div>
      <div className="text-sm custom-txt-shadow">{text}</div>
    </div>
  );
}

import Image from "next/image";

export default function StatBlock({ statText, icon, title, text }) {
  return (
    <div className="flex flex-col items-center recursive-font">
      <div className="flex items-center justify-between px-6 text-3xl font-bold text-white h-36 w-80 button-bg">
        <div className="w-20 h-full">
          <Image src={icon} alt={statText} />
        </div>
        <div className="text-5xl custom-txt-shadow">{statText}</div>
      </div>
      <div className="w-64 px-4">
        <div className="w-full text-xl font-bold text-blue-500">{title}</div>
        <p>{text}</p>
      </div>
    </div>
  );
}

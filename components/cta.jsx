import Image from "next/image";

export default function Cta({ icon, texts, link }) {
  return (
    <a href={link} target="_blank" rel="noreferrer">
      <div className="flex justify-center w-full space-x-12 cursor-pointer hover:drop-shadow-2xl hover:scale-105">
        <Image src={icon} alt="" />
        <div className="w-1/6 text-xl">
          <ul className="space-y-1 list-disc">
            {texts.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </div>
      </div>
    </a>
  );
}

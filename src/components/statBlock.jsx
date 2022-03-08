import * as React from "react";

export default function StatBlock({ statText, title, text, icon }) {
  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center justify-end h-24 px-6 text-3xl text-white w-60 button-bg recursive-font">
        <div className="custom-txt-shadow">{statText}</div>
      </div>
      <div className="w-64 px-4">
        <div className="w-full text-xl font-bold text-blue-500">{title}</div>
        <p>{text}</p>
      </div>
    </div>
  );
}

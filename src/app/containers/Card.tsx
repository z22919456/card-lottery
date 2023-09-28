"use client";

import { useState } from "react";

type Props = {
  number: number;
  string: string;
};

const Card = ({ number, string }: Props) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <div
      className={`${
        open && "transform-style-3d-active"
      } aspect-square relative transform-style-3d duration-300`}
      onClick={handleClick}
    >
      <div
        className={`card cardBack text-6xl justify-center flex items-center font-bold text-slate-800 card-${
          number % 12
        }`}
      >
        {number}
      </div>
      <div
        className={`card p-3 transform-rotateY-180 justify-center flex items-center card-${
          number % 12
        }`}
      >
        <p className="text-center text-gray-800 font-bold text-3xl ">
          {string}
        </p>
      </div>
    </div>
  );
};

export default Card;

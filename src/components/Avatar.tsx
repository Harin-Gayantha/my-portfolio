"use client";
import Image from "next/image";
import { useMemo, useState } from "react";

export default function Avatar({ src, alt }: { src: string; alt: string }) {
  const candidates = useMemo(() => {
    const base = src.replace(/\.(jpg|jpeg|png)$/i, "");
    return [
      `${base}.jpg`,
      `${base}.jpeg`,
      `${base}.png`,
    ];
  }, [src]);

  const [index, setIndex] = useState(0);
  const current = candidates[index];

  const handleError = () => {
    if (index < candidates.length - 1) setIndex(index + 1);
  };

  return (
    <div className="relative w-40 h-40 sm:w-56 sm:h-56 rounded-2xl overflow-hidden ring-2 ring-indigo-500/40 shadow-2xl">
      {index <= candidates.length - 1 ? (
        <Image src={current} alt={alt} fill className="object-cover" priority onError={handleError} />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500 to-fuchsia-500" />
      )}
    </div>
  );
}



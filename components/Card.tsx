import React from "react";
import Image from "next/image";
import { GoStack } from "react-icons/go";
import { CiStar } from "react-icons/ci";
import { MotionSection } from "./MotionSection";
import { Prop } from "@/app/lib";

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const Card = ({ anime, index }: Prop) => {
  return (
    <MotionSection
      variants={variants}
      initial="hidden"
      animate="visible"
      transition={{ delay: index * 0.25, ease: "easeInOut", duration: 0.5 }}
      className="max-w-[167px] hover:scale-110"
    >
      <div className="shadow-xl rounded-md p-2 border-[1px]">
        <Image
          src={`https://shikimori.one${anime.image.original}`}
          alt={anime.name}
          width={150}
          height={175}
          className="rounded-md cursor-pointer"
        />

        <div className="flex justify-between gap-1 items-center mt-1">
          <h1 className="line-clamp-1 font-semibold w-full cursor-pointer">
            {anime.name}
          </h1>
          <p className="bg-slate-200 px-1 rounded-md text-sm font-semibold">
            {anime.kind}
          </p>
        </div>

        <div className="flex items-center gap-2">
          <p className="flex items-center gap-1">
            <GoStack /> {anime.episodes || anime.episodes_aired}
          </p>
          <p className="flex items-center gap-1">
            <CiStar className="w-5 h-5" /> {anime.score}
          </p>
        </div>
      </div>
    </MotionSection>
  );
};

export default Card;

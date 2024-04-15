"use client";

import { fetchAnime } from "@/app/action";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import Card, { AnimeProp } from "./Card";

let page = 2;

export type animeCard = JSX.Element;

function Loader() {
  const { ref, inView } = useInView();
  const [data, setData] = useState<AnimeProp[]>([]);

  useEffect(() => {
    if (inView) {
      fetchAnime(page).then((res) => {
        setData([...data, ...res]);
        page++;
      });
    }
  }, [inView, data]);

  return (
    <>
      <section className="grid grid-cols-4 gap-10 px-8 place-items-center w-full pt-8">
        {data.map((item: AnimeProp, index: number) => (
          <Card key={item.id} anime={item} index={index} />
        ))}
      </section>
      <section className="flex justify-center items-center w-full mt-20">
        <div ref={ref}>
          <Image
            src="./spinner.svg"
            alt="spinner"
            width={56}
            height={56}
            className="object-contain"
          />
        </div>
      </section>
    </>
  );
}

export default Loader;

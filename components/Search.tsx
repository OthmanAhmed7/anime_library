"use client";

// import React, { useState } from "react";
import { fetchAnime } from "@/app/action";
// import Card, { AnimeProp } from "./Card";

let page = 1;

const Search = () => {
  // const [value, setValue] = useState("");

  // const data = fetchAnime(page);

  // console.log(
  //   data.filter((anime: any) => anime.name.toLowerCase().includes("on"))
  // );

  return (
    <section className="mx-auto w-1/3">
      <input
        type="text"
        placeholder="Search"
        name="search"
        // onChange={(e) => setValue(e.target.value)}
        className="py-2 px-[12rem] text-center border-black border-[1px] shadow-lg rounded-full"
      />
      {/* <div>
        {data
          .filter((anime: any) => anime.name.toLowerCase().includes(value))
          .map((item: AnimeProp, index: number) => (
            <Card key={item.id} anime={item} index={index} />
          ))}
      </div> */}
    </section>
  );
};

export default Search;

import Navbar from "@/components/Navbar";
import Search from "@/components/Search";
import { fetchAnime } from "./action";
import Loader from "@/components/Loader";
import Card, { AnimeProp } from "@/components/Card";

export default async function Home() {
  const data = await fetchAnime(1);

  return (
    <div className="mb-8">
      <Navbar />
      <Search />
      <section className="grid grid-cols-4 gap-10 px-8 place-items-center w-full pt-8">
        {data.map((item: AnimeProp, index: number) => (
          <Card key={item.id} anime={item} index={index} />
        ))}
      </section>
      <Loader />
    </div>
  );
}

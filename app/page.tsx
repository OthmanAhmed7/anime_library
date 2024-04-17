import Search from "@/components/Search";
import { fetchAnime } from "./action";
import Loader from "@/components/Loader";

export default async function Home() {
  const data = await fetchAnime(1);

  return (
    <div className="mb-8">
      <Search />
      <section className="grid grid-cols-4 gap-10 px-8 place-items-center w-full pt-8">
        {data}
      </section>
      <Loader />
    </div>
  );
}

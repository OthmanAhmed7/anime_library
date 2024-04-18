import { fetchAnime } from "./action";
import Loader from "@/components/Loader";

export default async function Home() {
  const data = await fetchAnime(1);

  return (
    <div className="mb-8">
      <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 px-8 place-items-center w-full pt-8">
        {data}
      </section>
      <Loader />
    </div>
  );
}

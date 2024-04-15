import Card, { AnimeProp } from "@/components/Card";

export const fetchAnime = async (page: number) => {
  const response = await fetch(
    `https://shikimori.one/api/animes?page=${page}&limit=8&order=popularity`
  );
  const data = await response.json();
  return data.map((item: AnimeProp, index: number) => (
    <Card key={item.id} anime={item} index={index} />
  ));
};

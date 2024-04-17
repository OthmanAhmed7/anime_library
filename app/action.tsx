"use server";

import Card, { AnimeProp } from "@/components/Card";
import { sessionOptions, SessionData, defaultSession } from "./lib";
import { getIronSession } from "iron-session";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { sql } from "@vercel/postgres";
import { compare, hash } from "bcrypt";

export const fetchAnime = async (page: number) => {
  const response = await fetch(
    `https://shikimori.one/api/animes?page=${page}&limit=8&order=popularity`
  );
  const data = await response.json();
  return data.map((item: AnimeProp, index: number) => (
    <Card key={item.id} anime={item} index={index} />
  ));
};

export const fetch_Anime = async (page: number) => {
  const response = await fetch(
    `https://shikimori.one/api/animes?page=${page}&limit=8&order=popularity`
  );
  const data = await response.json();
  return data;
};

export const getSession = async () => {
  const session = await getIronSession<SessionData>(cookies(), sessionOptions);

  if (!session.isLoggedIn) {
    session.isLoggedIn = defaultSession.isLoggedIn;
  }
  return session;
};
export const register = async (
  prevState: { error: undefined | string },
  formData: FormData
) => {
  const username = formData.get("username") as string;
  const password = formData.get("password") as string;
  const rePassword = formData.get("re-password") as string;
  const hashPassword = await hash(password, 10);
  const unique = await sql`SELECT * FROM person WHERE name=${username};`;
  const uniqueName = unique.rows[0];

  if (!username) {
    return { error: "Must enter a name" };
  }

  if (uniqueName) {
    return { error: "Must enter a unique name" };
  }

  if (!password) {
    return { error: "Must enter a password" };
  }

  if (rePassword !== password) {
    return { error: "Must enter the same password" };
  }

  await sql`INSERT INTO person (name, password) VALUES (${username}, ${hashPassword});`;

  redirect("/login");
};

export const login = async (
  prevState: { error: string | string },
  formData: FormData
) => {
  const session = await getSession();

  const username = formData.get("username") as string;
  const password = formData.get("password") as string;

  if (!username) {
    return { error: "Must enter a name" };
  }

  if (!password) {
    return { error: "Must enter a password" };
  }

  const unique = await sql`SELECT * FROM person WHERE name=${username};`;
  const uniqueName = unique.rows[0];

  if (!uniqueName) {
    return { error: "Wrong username" };
  }

  const uniquePassword = unique.rows[0];
  const correctPassword = await compare(
    password || "",
    uniquePassword.password
  );

  if (!correctPassword) {
    return { error: "Wrong password" };
  }

  session.username = uniqueName.name;
  session.isLoggedIn = true;

  await session.save();

  redirect("/");
};

export const logout = async () => {
  const session = await getSession();
  session.destroy();
  redirect("/");
};

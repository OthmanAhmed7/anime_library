import Link from "next/link";
import React from "react";
import Logout from "./Logout";
import { getSession } from "@/app/action";

const Navbar = async () => {
  const session = await getSession();

  return (
    <nav className="flex justify-between px-8 py-4 items-center">
      <h1 className="text-xl leading-none">
        <Link href="/">
          Anime
          <br />
          Library.
        </Link>
      </h1>

      <div className="flex gap-4 items-center">
        {!session.isLoggedIn && (
          <Link href="/login">
            <button className="py-1 px-4 bg-black border-2 border-black text-white rounded-md hover:bg-white hover:text-black hover:border-black hover:border-[2px] hover:font-semibold">
              Log In
            </button>
          </Link>
        )}
        {!session.isLoggedIn && (
          <Link href="/register">
            <button className="py-1 px-4 hover:bg-black hover:border-2 hover:border-black hover:text-white rounded-md border-black border-[2px] font-semibold">
              Register
            </button>
          </Link>
        )}
        {session.isLoggedIn && <Logout />}
      </div>
    </nav>
  );
};

export default Navbar;

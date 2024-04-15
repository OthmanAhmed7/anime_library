import React from "react";
import { FaHeart } from "react-icons/fa";
import { IoIosList } from "react-icons/io";

const Navbar = () => {
  return (
    <nav className="flex justify-between px-8 py-4 items-center">
      <h1 className="text-xl leading-none">
        Anime
        <br />
        Library.
      </h1>

      <div className="flex gap-4 items-center">
        <p>
          <FaHeart />
        </p>
        <p>
          <IoIosList />
        </p>
        <p>Log In</p>
        <p>Register</p>
        <p>Log Out</p>
      </div>
    </nav>
  );
};

export default Navbar;

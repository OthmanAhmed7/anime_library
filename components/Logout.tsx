import { logout } from "@/app/action";
import React from "react";

const Logout = () => {
  return (
    <form action={logout}>
      <button className="py-1 px-4 bg-black border-2 border-black text-white rounded-md hover:bg-white hover:text-black hover:border-black hover:border-[2px] hover:font-semibold">
        Log Out
      </button>
    </form>
  );
};

export default Logout;

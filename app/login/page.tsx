"use client";

import React from "react";
import { login } from "../action";
import { useFormState } from "react-dom";

const Login = () => {
  const [state, formAction] = useFormState<any, FormData>(login, undefined);
  return (
    <form
      action={formAction}
      className="flex flex-col items-center gap-5 mt-[10%]"
    >
      <input
        type="text"
        name="username"
        placeholder="Enter your name"
        className="border-b-2 border-black"
      />
      <input
        type="password"
        name="password"
        placeholder="Enter your password"
        className="border-b-2 border-black"
      />

      <button>Log In</button>
      {state?.error && (
        <p className="text-red-500 text-xs font-semibold">{state.error}</p>
      )}
    </form>
  );
};

export default Login;

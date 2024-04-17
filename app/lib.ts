import { SessionOptions } from "iron-session";

export interface SessionData {
  userId?: string;
  username?: string;
  password?: string;
  isLoggedIn: boolean;
}

export const defaultSession: SessionData = {
  isLoggedIn: false,
};

export const sessionOptions: SessionOptions = {
  password: process.env.SECRET_KEY!,
  cookieName: "Othman-Ahmed",
  cookieOptions: {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
  },
};

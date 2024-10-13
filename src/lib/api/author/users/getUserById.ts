"use server";
import { cookies } from "next/headers";
import { decode, JwtPayload } from "jsonwebtoken";
import { AUTHOR_TOKEN, AUTHOR_URL } from "../../constant";
import { TUser } from "../types/TUser";

export const getUserById = async (id?: string): Promise<TUser> => {
  const token = cookies().get("token");
  const user = decode(String(token?.value)) as JwtPayload;
  const url = `${AUTHOR_URL}v1/users/${id ? id : user.id}`;

  try {
    const response = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
        Authorization: String(AUTHOR_TOKEN),
      },
    });

    const user = await response.json();
    if (!response.ok) {
      throw new Error(user.status_text);
    }

    return user;
  } catch (err: any) {
    throw new Error(err.message);
  }
};

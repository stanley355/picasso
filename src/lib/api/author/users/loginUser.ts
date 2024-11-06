"use server";
import { cookies } from "next/headers";
import { AUTHOR_TOKEN, AUTHOR_URL } from "../../constant";

export const loginUser = async (
  email: string,
  password: string,
): Promise<{ token: string }> => {
  const url = `${AUTHOR_URL}v1/users/login/`;

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: String(AUTHOR_TOKEN),
      },
      body: JSON.stringify({ email, password }),
    });

    const user = await response.json();
    if (!response.ok) {
      throw new Error(user.status_text);
    }

    cookies().set("token", user.token);
    return user;
  } catch (err: any) {
    throw new Error(err.message);
  }
};

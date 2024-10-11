"use server";
import { cookies } from "next/headers";
import { AUTHOR_TOKEN, AUTHOR_URL } from "../../constant";

type TRequestBody = {
  fullname: string;
  email: string;
  password: string;
  password_again: string;
};

export const registerUser = async (
  reqBody: TRequestBody
): Promise<{ token: string }> => {
  const url = `${AUTHOR_URL}v1/users/register/`;

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: String(AUTHOR_TOKEN),
      },
      body: JSON.stringify(reqBody),
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

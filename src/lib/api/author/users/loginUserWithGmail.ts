"use server";
import { cookies } from "next/headers";
import { JwtPayload } from "jsonwebtoken";
import { AUTHOR_TOKEN, AUTHOR_URL } from "../../constant";

export const loginUserWithGmail = async (
  payload: JwtPayload,
): Promise<boolean> => {
  const url = `${AUTHOR_URL}v1/users/login/gmail/`;
  const data = {
    fullname: payload.name,
    email: payload.email,
  };

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: String(AUTHOR_TOKEN),
      },
      body: JSON.stringify(data),
    });

    const user = await response.json();
    if (!response.ok) {
      throw new Error(user.status_text);
    }
    cookies().set("token", user.token);
    return true;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

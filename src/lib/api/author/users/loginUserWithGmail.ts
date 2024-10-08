"use server";
import { cookies } from "next/headers";
import { JwtPayload } from "jsonwebtoken";
import { AUTHOR_TOKEN, AUTHOR_URL } from "../../constant";

export const loginUsersWithGmail = async (
  payload: JwtPayload
): Promise<boolean> => {
  const url = `${AUTHOR_URL}v1/users/login/gmail/`;
  const data = {
    fullname: payload.name,
    email: payload.email,
  };

  try {
    const user = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: String(AUTHOR_TOKEN),
      },
      body: JSON.stringify(data),
    });

    const response = await user.json();
    cookies().set("token", response.token);
    return true;
  } catch (error: unknown) {
    return false;
  }
};

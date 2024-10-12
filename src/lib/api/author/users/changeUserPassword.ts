"use server";
import { cookies } from "next/headers";
import { AUTHOR_TOKEN, AUTHOR_URL } from "../../constant";
import { decode, JwtPayload } from "jsonwebtoken";

type TRequestBody = {
  old_password: string;
  new_password: string;
  new_password_again: string;
};

export const changeUserPassword = async (
  reqBody: TRequestBody
): Promise<{ token: string }> => {
  const url = `${AUTHOR_URL}v1/users/change-password/`;

  const token = cookies().get("token");
  const userJwt = decode(String(token?.value)) as JwtPayload;

  try {
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: String(AUTHOR_TOKEN),
      },
      body: JSON.stringify({ id: userJwt.id, ...reqBody }),
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

"use server";
import { cookies } from "next/headers";
import { AUTHOR_TOKEN, AUTHOR_URL } from "../../constant";
import { decode, JwtPayload } from "jsonwebtoken";
import { TCheckbot } from "../types/TCheckbot";

type TRequestBody = {
  instruction: string;
  system_content: string;
  user_content: string;
  n: number;
  temperature: number;
};

export const fetchCheckbot = async (
  reqBody: TRequestBody
): Promise<TCheckbot[]> => {
  const token = cookies().get("token");
  const user = decode(String(token?.value)) as JwtPayload;

  const url = `${AUTHOR_URL}v1/checkbots/`;

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: String(AUTHOR_TOKEN),
      },
      body: JSON.stringify({ user_id: user.id, ...reqBody }),
    });

    const checkbot = await response.json();

    if (!response.ok) {
      throw new Error(checkbot.status_text);
    }
    return checkbot;
  } catch (err: any) {
    throw new Error(err.message);
  }
};

"use server";
import { cookies } from "next/headers";
import { AUTHOR_TOKEN, AUTHOR_URL } from "../../constant";
import { decode, JwtPayload } from "jsonwebtoken";
import { TCheckbot } from "../types/TCheckbot";

type TRequestBody = {
  file_name: string;
  file_url: string;
  temperature: number;
  language: string;
  timestamp_granularities?: string;
};

export const fetchSpeechToText = async (
  reqBody: TRequestBody,
): Promise<TCheckbot[]> => {
  const token = cookies().get("token");
  const user = decode(String(token?.value)) as JwtPayload;

  const url = `${AUTHOR_URL}v1/speech-to-text/`;

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: String(AUTHOR_TOKEN),
      },
      body: JSON.stringify({ user_id: user.id, ...reqBody }),
    });

    const stt = await response.json();

    if (!response.ok) {
      throw new Error(stt.status_text);
    }
    return stt;
  } catch (err: any) {
    throw new Error(err.message);
  }
};

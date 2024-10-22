"use server";
import { cookies } from "next/headers";
import { AUTHOR_TOKEN, AUTHOR_URL } from "../../constant";
import { decode, JwtPayload } from "jsonwebtoken";
import { TTranscription } from "../types/TTranscription";

type TRequestBody = {
  input: string;
  voice: string;
  speed: number;
  response_format: string;
};

export const fetchTextToSpeech = async (
  reqBody: TRequestBody,
): Promise<TTranscription> => {
  const token = cookies().get("token");
  const user = decode(String(token?.value)) as JwtPayload;

  const url = `${AUTHOR_URL}v1/text-to-speech/`;

  console.log(user.id, reqBody);

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: String(AUTHOR_TOKEN),
      },
      body: JSON.stringify({ user_id: user.id, ...reqBody }),
    });

    const tts = await response.json();

    if (!response.ok) {
      throw new Error(tts.status_text);
    }
    return tts;
  } catch (err: any) {
    throw new Error(err.message);
  }
};

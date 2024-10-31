"use server";

import { cookies } from "next/headers";

export const getUserToken = async () => {
  const token = cookies().get("token");
  return token?.value;
};

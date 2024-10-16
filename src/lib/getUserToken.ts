"use server";

import { cookies } from "next/headers";

export const getUserToken = () => {
  const token = cookies().get("token");
  return token?.value;
};

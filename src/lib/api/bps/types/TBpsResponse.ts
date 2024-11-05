export type TBpsResponse<T> = {
  status: string;
  "data-availability": "list-not-available" | "available";
  data: string | T[]
};

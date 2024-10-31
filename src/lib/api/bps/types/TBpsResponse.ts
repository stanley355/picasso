export type TBpsResponse<T> = {
  status: string;
  "data-availability": string;
  data: string | Array<T>;
};

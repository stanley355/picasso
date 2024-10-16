import { toast } from "react-toastify";

export const copyToClipboard = (text: string) => {
  window.navigator.clipboard.writeText(text);
  toast("Text copied to clipboard");
};

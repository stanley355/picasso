export type TCheckbot = {
  id: number;
  user_id: string;
  created_at: string;
  updated_at: string;
  instruction: string;
  model: string;
  system_content: string;
  user_content: string;
  completion_content: string;
  prompt_tokens: number;
  completion_tokens: number;
  total_tokens: number;
};

export type TTranscriptionWord = {
  word: string;
  start: string;
  end: string;
};

export type TTranscriptionSegment = {
  text: string;
  start: string;
  end: string;
};

export type TTranscription = {
  text: string;
  words: TTranscriptionWord[] | null;
  segments: TTranscriptionSegment[] | null;
};

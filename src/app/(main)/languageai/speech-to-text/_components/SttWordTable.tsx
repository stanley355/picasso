import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { TTranscriptionWord } from "@/lib/api/author/types/TTranscription";
import React from "react";

type TSttWordTable = {
  words: TTranscriptionWord[];
};

const SttWordTable = ({ words }: TSttWordTable) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>ID</TableHead>
          <TableHead>Word</TableHead>
          <TableHead>Start</TableHead>
          <TableHead>End</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {words.map((word, index) => (
          <TableRow key={word.word}>
            <TableCell>{index + 1}</TableCell>
            <TableCell>{word.word}</TableCell>
            <TableCell>{word.start}</TableCell>
            <TableCell>{word.end}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default SttWordTable;

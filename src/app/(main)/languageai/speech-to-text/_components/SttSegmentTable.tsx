import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  TTranscriptionSegment,
} from "@/lib/api/author/types/TTranscription";
import React from "react";

type TSttSegmentTable = {
  segments: TTranscriptionSegment[];
};

const SttSegmentTable = ({ segments }: TSttSegmentTable) => {
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
        {segments.map((segment, index) => (
          <TableRow key={segment.text}>
            <TableCell>{index + 1}</TableCell>
            <TableCell>{segment.text}</TableCell>
            <TableCell>{segment.start}</TableCell>
            <TableCell>{segment.end}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default SttSegmentTable;

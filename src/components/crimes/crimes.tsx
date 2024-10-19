// components/crimes/crimes.tsx
"use client";

import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import CrimeDescription from "./crimeDescription";

interface Crime {
  id: number;
  title: string;
  description: string;
  type: string;
  date: string;
  status: string;
}

const crimesList: Crime[] = [
  {
    id: 1,
    title: "Burglary at Downtown",
    description: "A burglary occurred at downtown...",
    type: "Burglary",
    date: "2024-03-15",
    status: "Fulfilled",
  },
  {
    id: 2,
    title: "Vandalism in Park",
    description: "An act of vandalism took place in the central park...",
    type: "Vandalism",
    date: "2024-03-16",
    status: "Declined",
  },
  // Add more crimes as needed
];

export default function Crimes() {
  return (
    <Card>
      <CardHeader className="px-7">
        <CardTitle>Crimes</CardTitle>
        <CardDescription>Recent crimes.</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead className="hidden sm:table-cell">Crime Type</TableHead>
              <TableHead className="hidden sm:table-cell">Status</TableHead>
              <TableHead className="hidden md:table-cell">Date</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {crimesList.map((crime) => (
              <TableRow key={crime.id}>
                <TableCell>
                  <Link href={`/crimes/${crime.id}`} onClick={() => console.log(`Clicked on crime ID: ${crime.id}`)}>
                    <div className="font-medium text-blue-500 cursor-pointer">
                      {crime.title}
                    </div>
                  </Link>
                  <div className="hidden text-sm text-muted-foreground md:inline">
                    {crime.description.substring(0, 50)}...
                  </div>
                </TableCell>
                <TableCell className="hidden sm:table-cell">
                  {crime.type}
                </TableCell>
                <TableCell className="hidden sm:table-cell">
                  <Badge
                    className="text-xs"
                    variant={
                      crime.status === "Fulfilled" ? "secondary" : "outline"
                    }
                  >
                    {crime.status}
                  </Badge>
                </TableCell>
                <TableCell className="hidden md:table-cell">
                  {crime.date}
                </TableCell>
                <TableCell className="text-right">
                  <Link href={`/crimes/${crime.id}`} onClick={() => console.log(CrimeDescription)}>
                    <span className="text-blue-500 cursor-pointer">
                      View Details
                    </span>
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}

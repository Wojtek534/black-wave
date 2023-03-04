import {ColumnDef, createColumnHelper} from "@tanstack/react-table"
import React from "react"

export type Person = {
  firstName: string
  lastName: string
  age: number
  visits: number
  status: string
  progress: number
}

export const defaultData: Person[] = [
  {
    firstName: "tanner",
    lastName: "linsley",
    age: 24,
    visits: 100,
    status: "In Relationship",
    progress: 50,
  },
  {
    firstName: "tandy",
    lastName: "miller",
    age: 40,
    visits: 40,
    status: "Single",
    progress: 80,
  },
  {
    firstName: "joe",
    lastName: "dirte",
    age: 45,
    visits: 20,
    status: "Complicated",
    progress: 10,
  },
]

const columnHelper = createColumnHelper<Person>()

export const columns = [
  columnHelper.accessor("firstName", {
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor((row) => row.lastName, {
    id: "lastName",
    cell: (info) => <i>{info.getValue()}</i>,
    header: () => <span>Last Name</span>,
  }),
  columnHelper.accessor("age", {
    header: () => "Age",
    cell: (info) => info.renderValue(),
  }),
  columnHelper.accessor("visits", {
    header: () => <span>Visits</span>,
  }),
  columnHelper.accessor("status", {
    header: "Status",
  }),
  columnHelper.accessor("progress", {
    header: "Profile Progress",
  }),
]

export const cols: ColumnDef<Person>[] = [
  {
    accessorKey: "firstName",
    cell: (info) => info.getValue(),
  },
  {
    accessorFn: (row) => row.lastName,
    id: "lastName",
    cell: (info) => info.getValue(),
    header: () => <span>Last Name</span>,
  },
  {
    accessorKey: "age",
    header: () => "Age",
  },
  {
    accessorKey: "visits",
    header: () => <span>Visits</span>,
  },
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "progress",
    header: "Profile Progress",
  },
]

export const colsPagination: ColumnDef<Person>[] = [
  {
    header: "Name",
    columns: [
      {
        accessorKey: "firstName",
        cell: (info) => info.getValue(),
      },
      {
        accessorFn: (row) => row.lastName,
        id: "lastName",
        cell: (info) => info.getValue(),
        header: () => <span>Last Name</span>,
      },
    ],
  },
  {
    header: "Info",
    columns: [
      {
        accessorKey: "age",
        header: () => "Age",
      },
      {
        header: "More Info",
        columns: [
          {
            accessorKey: "visits",
            header: () => <span>Visits</span>,
          },
          {
            accessorKey: "status",
            header: "Status",
          },
          {
            accessorKey: "progress",
            header: "Profile Progress",
          },
        ],
      },
    ],
  },
]

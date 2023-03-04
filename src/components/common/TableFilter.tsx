import {Column, Table as ReactTable} from "@tanstack/react-table"
import {classNames} from "../utilities"

export interface TableFilter {
  column: Column<any, any>
  table: ReactTable<any>
}

export function TableFilter({column, table}: TableFilter) {
  const classes =
    "block w-full px-2 py-1 bg-white dark:bg-gray-900 text-xs border-0 border-b border-gray-300 dark:border-gray-600 focus:border-black focus:ring-0 focus:outline-none"
  /*
  const classes =
    "text-gray-700 font-normal text-xs border-b rounded-none shadow-none focus:outline-0"
*/
  const firstValue = table
    .getPreFilteredRowModel()
    .flatRows[0]?.getValue(column.id)

  const columnFilterValue = column.getFilterValue()

  return typeof firstValue === "number" ? (
    <div className="flex space-x-2 h-6">
      <input
        type="number"
        value={(columnFilterValue as [number, number])?.[0] ?? ""}
        onChange={(e) =>
          column.setFilterValue((old: [number, number]) => [
            e.target.value,
            old?.[1],
          ])
        }
        placeholder={`Min`}
        className={classNames(`basis-1/2 ${classes}`)}
      />
      <input
        type="number"
        value={(columnFilterValue as [number, number])?.[1] ?? ""}
        onChange={(e) =>
          column.setFilterValue((old: [number, number]) => [
            old?.[0],
            e.target.value,
          ])
        }
        placeholder={`Max`}
        className={classNames(`basis-1/2 ${classes}`)}
      />
    </div>
  ) : (
    <div className="h-6">
      <input
        type="text"
        value={(columnFilterValue ?? "") as string}
        onChange={(e) => column.setFilterValue(e.target.value)}
        placeholder={`Search...`}
        className={classNames(`${classes}`)}
      />
    </div>
  )
}

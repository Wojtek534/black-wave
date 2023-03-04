import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from "@tanstack/react-table"
import React from "react"
import {classNames} from "../utilities"
import {Icon} from "./Icon"
import {TableFilter} from "./TableFilter"
import {Appearance, Hover, IconList, Space} from "../types"

interface TableProps<T> {
  tableData: Array<T>
  columns: ColumnDef<T, any>[]
  filters?: TableFilter
}

export function Table<T>({tableData, columns, filters}: TableProps<T>) {
  const [data, setData] = React.useState(() => [...tableData])
  const rerender = React.useReducer(() => ({}), {})[1]
  const [sorting, setSorting] = React.useState<SortingState>([])

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
    },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
  })

  const paginationStyle = classNames(
    `rounded px-2 py-1 ${Appearance.GrayText} ${Hover.Brightness}}`
  )
  return (
    <div className="p-2 overflow-x-auto">
      <table className="w-full">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr
              key={headerGroup.id}
              className="border-b mb-1 text-left capitalize "
            >
              {headerGroup.headers.map((header) => (
                <th key={header.id} className="px-2 py-1">
                  <div className="flex items-center">
                    {/* Display */}
                    {header.isPlaceholder ? null : (
                      <div
                        {...{
                          className: header.column.getCanSort()
                            ? "cursor-pointer select-none"
                            : "",
                          onClick: header.column.getToggleSortingHandler(),
                        }}
                      >
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                      </div>
                    )}

                    {/* Sorting */}
                    {{
                      asc: (
                        <Icon
                          icon={IconList.CHEVRON_UP}
                          space={Space.VerySmall}
                        />
                      ),
                      desc: (
                        <Icon
                          icon={IconList.CHEVRON_DOWN}
                          space={Space.VerySmall}
                        />
                      ),
                    }[header.column.getIsSorted() as string] ?? null}
                  </div>
                  {/* Filter */}
                  {header.column.getCanFilter() ? (
                    <div>
                      <TableFilter column={header.column} table={table} />
                    </div>
                  ) : null}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td
                  key={cell.id}
                  className={classNames(
                    `border-b border-r border-l px-2 py-1 ${
                      row.index % 2 === 0 ? "" : "bg-gray-100"
                    }`
                  )}
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
        <tfoot>
          {table.getFooterGroups().map((footerGroup) => (
            <tr key={footerGroup.id}>
              {footerGroup.headers.map((header) => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.footer,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </tfoot>
      </table>

      <div className="flex items-center gap-2 mt-2">
        <button
          className={classNames(`rounded px-2 py-1 ${paginationStyle}`)}
          onClick={() => table.setPageIndex(0)}
          disabled={!table.getCanPreviousPage()}
        >
          {"<<"}
        </button>
        <button
          className={classNames(`rounded px-2 py-1 ${paginationStyle}`)}
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          {"<"}
        </button>
        <button
          className={classNames(`rounded px-2 py-1 ${paginationStyle}`)}
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          {">"}
        </button>
        <button
          className={classNames(`rounded px-2 py-1 ${paginationStyle}`)}
          onClick={() => table.setPageIndex(table.getPageCount() - 1)}
          disabled={!table.getCanNextPage()}
        >
          {">>"}
        </button>
        <span className="flex items-center gap-1">
          <div>Page</div>
          <strong>
            {table.getState().pagination.pageIndex + 1} of{" "}
            {table.getPageCount()}
          </strong>
        </span>
        <span className="flex items-center gap-1">
          | Go to page:
          <input
            type="number"
            defaultValue={table.getState().pagination.pageIndex + 1}
            onChange={(e) => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0
              table.setPageIndex(page)
            }}
            className="border p-1 rounded w-16"
          />
        </span>
        <select
          value={table.getState().pagination.pageSize}
          onChange={(e) => {
            table.setPageSize(Number(e.target.value))
          }}
        >
          {[10, 20, 30, 40, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </div>
      <div>{table.getRowModel().rows.length} Rows</div>
      <pre>{JSON.stringify(table.getState().pagination, null, 2)}</pre>
    </div>
  )
}

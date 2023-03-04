import React, {useState} from "react"

interface Props {
  items: Array<any>
  itemsPerPage: number
}

const List: React.FC<Props> = ({items, itemsPerPage}) => {
  const [currentPage, setCurrentPage] = useState(1)

  const lastIndex = currentPage * itemsPerPage
  const firstIndex = lastIndex - itemsPerPage
  const currentItems = items.slice(firstIndex, lastIndex)

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber)

  return (
    <>
      <ul>
        {currentItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <Pagination
        itemsPerPage={itemsPerPage}
        totalItems={items.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </>
  )
}

interface PaginationProps {
  itemsPerPage: number
  totalItems: number
  paginate: (pageNumber: number) => void
  currentPage: number
}

const Pagination: React.FC<PaginationProps> = ({
  itemsPerPage,
  totalItems,
  paginate,
  currentPage,
}) => {
  const pageNumbers = []

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i)
  }

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <a onClick={() => paginate(number)} className="page-link">
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default List

/*
In this example, the List component takes in an array of items and the number of items per page to display. 
It then uses the currentPage state to determine which items to display. The component also renders a Pagination component, 
which takes in the items per page, the total number of items, the pagination function, and the current page. 
The Pagination component creates an array of page numbers and maps over it to render the pagination links.
*/

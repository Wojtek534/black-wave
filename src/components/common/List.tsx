import {useState} from "react"
import {classNames} from "../utilities"
import {Button, ButtonIcon} from "./Button"
import {Icon} from "./Icon"
import {
  Appearance,
  ButtonIconSize,
  ButtonSize,
  Hover,
  IconList,
  ListItemSize,
  Space,
} from "../types"
import {ListProps, PaginationProps, ListItemProps} from "../interface"

export function List({items, limit = 10}: ListProps): JSX.Element {
  const [currentPage, setCurrentPage] = useState(1)
  const lastIndex = currentPage * limit
  const firstIndex = lastIndex - limit
  const currentItems = items.slice(firstIndex, lastIndex)

  const paginate = (pageNumber: number): void => setCurrentPage(pageNumber)

  return (
    <>
      <ul className="">
        {currentItems.map((item) => {
          return (
            <li className="" key={crypto.randomUUID()}>
              <ListItem {...item}>{item.children}</ListItem>
            </li>
          )
        })}
      </ul>
      <Pagination
        currentPage={currentPage}
        itemsPerPage={limit}
        totalItems={items.length}
        paginate={paginate}
      />
    </>
  )
}

function Pagination({
  currentPage,
  itemsPerPage,
  totalItems,
  paginate,
}: PaginationProps): JSX.Element {
  const pageNumbers = []

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i)
  }

  return (
    <nav>
      <ul className="flex ">
        {currentPage > 1 ? (
          <li className="">
            <ButtonIcon
              appearance={Appearance.GrayText}
              buttonIconSize={ButtonIconSize.Base}
              onClick={() => paginate(currentPage - 1)}
            >
              <Icon icon={IconList.CHEVRON_LEFT} />
            </ButtonIcon>
          </li>
        ) : (
          <></>
        )}
        {pageNumbers.map((number) => (
          <li key={number} className="">
            <Button
              appearance={Appearance.GrayText}
              buttonSize={ButtonSize.Base}
              onClick={() => paginate(number)}
            >
              {number}
            </Button>
          </li>
        ))}
        {currentPage < totalItems / itemsPerPage ? (
          <li className="">
            <ButtonIcon
              appearance={Appearance.GrayText}
              buttonIconSize={ButtonIconSize.Base}
              onClick={() => paginate(currentPage + 1)}
            >
              <Icon icon={IconList.CHEVRON_RIGHT} />
            </ButtonIcon>
          </li>
        ) : (
          <></>
        )}
      </ul>
    </nav>
  )
}

export function ListItem({
  appearance = Appearance.GrayTransparent,
  space = Space.BaseBottom,
  listItemSize = ListItemSize.Base,
  hover = Hover.None,
  onClick,
  children,
  ...props
}: ListItemProps): JSX.Element {
  let localProps = {}

  const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>): void => {
    event.preventDefault
    if (onClick) {
      onClick()
    }
  }

  if (onClick) {
    localProps = {
      onClick: handleClick,
    }
  }

  return (
    <div
      className={classNames(
        `${appearance} ${hover} ${listItemSize} ${space} ${
          onClick ? "pointer" : ""
        }`
      )}
      {...localProps}
      {...props}
    >
      {children}
    </div>
  )
}

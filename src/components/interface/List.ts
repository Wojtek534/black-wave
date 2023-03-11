import { Appearance, Hover, ListItemSize, Space } from '../types';

export interface ListProps {
  /**
   * List of items to display
   */
  items: Array<ListItemProps>;
  /**
   * Maximum displayed items in list, where 0 = infinite
   */
  limit?: number;
}

export interface ListItemProps {
  /**
   * Component appearance
   */
  appearance?: Appearance;
  /**
   * Set padding size of list item with shape rectangle
   */
  listItemSize?: ListItemSize;
  /**
   *  Margin around list item
   */
  space?: Space;

  /**
   * On hover effect for list item
   */
  hover?: Hover;
  /**
   * Action to run on item click
   */
  onClick?: () => void;
  /**
   * List item content
   */
  children: string | JSX.Element;
}

export interface PaginationProps {
  currentPage: number;
  itemsPerPage: number;
  totalItems: number;
  paginate: (pageNumber: number) => void;
}

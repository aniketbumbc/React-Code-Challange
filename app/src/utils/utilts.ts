import {
  BLUE,
  DEFAULT,
  DONE,
  ERROR,
  GREEN,
  NEW,
  PROCESS,
  RED,
  YELLOW,
} from 'src/constant/constant';
import { Animal } from 'src/types/types';

/**
 *  Conver error into erro message
 * @param error
 */

export const getErrorMessage = (error: unknown): string => {
  if (error instanceof Error) return error.message;
  return String(error);
};

/**
 * Method is used for filter array based on search input value
 * @param demoData
 * @param searchValue
 */

export const getFilterSeachResult = (
  demoData: Animal[],
  searchValue: string
): Animal[] => {
  if (!searchValue.length) {
    return demoData;
  }
  const lowerCaseSearchValue = searchValue.toLocaleLowerCase();
  return demoData.filter((animal: Animal) =>
    animal.name.toLocaleLowerCase().includes(lowerCaseSearchValue)
  );
};

/**
 *  Name sorted by asc/desc
 * @param filterTableItems
 * @param sortOrder
 */

export const getSortedItems = (
  filterTableItems: Animal[],
  sortOrder: string
): Animal[] => {
  return sortOrder === 'ascen'
    ? filterTableItems.sort((a, b) => a.name.localeCompare(b.name))
    : filterTableItems.sort((a, b) => b.name.localeCompare(a.name));
};

/**
 * Method is used for get date correct format
 * @param date
 */

export const getFromatedDate = (date: Date): string => {
  return new Date(date).toISOString().slice(0, 10);
};

/**
 *  Method is change color based on dropdown selection
 * @param status {new,done}
 */

export const handleColorChange = (status: string): string => {
  switch (status) {
    case NEW:
      return BLUE;
    case DONE:
      return GREEN;
    case ERROR:
      return RED;
    case PROCESS:
      return YELLOW;
    default:
      return DEFAULT;
  }
};

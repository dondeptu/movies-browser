import { useSelector } from "react-redux";
import { selectTotalPages } from "./paginationSlice";

export const useTotalPages = () => {
  const totalPages = useSelector(selectTotalPages);

  if (!totalPages) {
    console.error("Invalid data for total pages", totalPages);
    return 500;
  }
  return totalPages;
};


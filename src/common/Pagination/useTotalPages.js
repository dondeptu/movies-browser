import { useSelector } from "react-redux";

export const useTotalPages = () => {
  const totalPages = useSelector((state) => state.pagination.totalPages);

  if (!totalPages) {
    console.error("Invalid data for total pages", totalPages);
    return 500;
  }
  return totalPages;
};

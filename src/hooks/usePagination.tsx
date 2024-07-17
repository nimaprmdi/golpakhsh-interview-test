import { useCallback } from "react";

export const usePagination = (pageCount: number, setCurrentPage: React.Dispatch<React.SetStateAction<number>>) => {
  const nextPage = useCallback(() => {
    setCurrentPage((prev) => Math.min(prev + 1, pageCount));
  }, [pageCount, setCurrentPage]);

  const prevPage = useCallback(() => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  }, [setCurrentPage]);

  const goToPage = useCallback(
    (page: number) => {
      const pageNumber = Math.max(1, Math.min(page, pageCount));
      setCurrentPage(pageNumber);
    },
    [pageCount, setCurrentPage]
  );

  return { nextPage, prevPage, goToPage };
};

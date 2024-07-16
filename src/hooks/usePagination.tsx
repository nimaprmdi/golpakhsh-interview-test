export const usePagination = (pageCount: number, setCurrentPage: React.Dispatch<React.SetStateAction<number>>) => {
  const nextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, pageCount));
  };

  const prevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const goToPage = (page: number) => {
    const pageNumber = Math.max(1, Math.min(page, pageCount));
    setCurrentPage(pageNumber);
  };

  return { nextPage, prevPage, goToPage };
};

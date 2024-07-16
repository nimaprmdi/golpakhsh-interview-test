interface IPagination {
  nextPage: () => void;
  prevPage: () => void;
  goToPage: (page: number) => void;
}

export type { IPagination };

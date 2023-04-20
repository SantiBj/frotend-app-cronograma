export function usePagination(data,page,setPage) {
  
  function nextPage() {
    if (data.next) {
      setPage(page + 1);
    }
  }
  function prevPage() {
    if (data.previous) {
      setPage(page - 1);
    }
  }

  return {
    nextPage,
    prevPage,
  };
}

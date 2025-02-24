if (typeof sizeFilters === "undefined") {
  const sizeFilters = document.querySelectorAll(
    '[data-collection-filter="size"]'
  );

  if (sizeFilters) {
    sizeFilters.forEach((filter) => {
      const firstItem = filter.children[0];
      const thirdItem = filter.children[3];
      filter.insertBefore(firstItem, thirdItem);
    });
  }
}

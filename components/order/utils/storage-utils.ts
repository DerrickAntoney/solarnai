export const clearStorageItems = (items: string[]) => {
  items.forEach((item) => {
    localStorage.removeItem(item);
  });
}; 
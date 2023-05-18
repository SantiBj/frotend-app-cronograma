export function useCountSelected(context) {
  let quantity = 0;
  const listID = [];

  for (const key in context) {
    if (context[key]) {
      listID.push(key);
      quantity++;
    }
  }

  return {
    quantity,
    listID,
  };
}

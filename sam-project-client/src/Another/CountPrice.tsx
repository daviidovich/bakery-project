export function getNewPrice(oldP: number, disc: number): number {
  let newPrice = oldP - (oldP * disc) / 100;
  return newPrice;
}

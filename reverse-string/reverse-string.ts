export function reverse(str: string) {
  let result: string = '';
  for (const strElement of str) {
    result = strElement + result;
  }
  return result;
}

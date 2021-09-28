export function decodedValue(color: string[]): number {
  return COLORS.indexOf(color[0]) * 10 + COLORS.indexOf(color[1]);
}


const COLORS = [
  'black',
  'brown',
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'violet',
  'grey',
  'white'
]; 

enum COLOR {
  black,
  brown,
  red,
  orange,
  yellow,
  green,
  blue,
  violet,
  grey,
  white
}
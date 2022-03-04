const resistors: {[key: string]: number} = {

  black: 0,
  brown: 1,
  red: 2,
  orange: 3,
  yellow: 4,
  green: 5,
  blue: 6,
  violet: 7,
  grey: 8,
  white: 9,
}

export function decodedResistorValue(trio: string[]) {

  let temp = '';

  temp += resistors[trio[0]];
  temp += resistors[trio[1]];

  let result = +temp * Math.pow(10, +resistors[trio[2]]);

  if (result / 1000 > 1) {

    return (result / 1000) + ' kiloohms';

  } else {

    return result + ' ohms';

  }
}

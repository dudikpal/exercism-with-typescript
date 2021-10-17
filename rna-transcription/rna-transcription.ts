export function toRna(dna: string) {

  let result = '';
  for (let i = 0; i < dna.length; i++) {
    result += switchToRna(dna[i]);
  }
  return result;
}


function switchToRna(dna: string) {

    switch (dna ) {
      case 'G' : return 'C';
      case 'C' : return 'G';
      case 'T' : return 'A';
      case 'A' : return 'U';
      default: throw new Error('Invalid input DNA.');
    }
}

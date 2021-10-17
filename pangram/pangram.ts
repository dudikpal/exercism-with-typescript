export function isPangram(sentence: string) {

    const letters = 'abcdefghijklmnopqrstuvwxyz'.split('');
    let arr: string[] = [];

    for (const letter of sentence.toLowerCase().split('')) {
        if (letters.includes(letter) && !arr.includes(letter)) {
            arr.push(letter);
        }
    }
    return arr.length == letters.length;
}

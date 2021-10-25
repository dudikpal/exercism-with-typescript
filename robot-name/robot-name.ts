export class Robot {


  private _name!: string;

  private static _names: Set<string> = new Set<string>();

  private static _namesMap: Map<string, Set<string>> = new Map<string, Set<string>>();


  constructor() {
    this.nameGenerator();
  }

  public get name(): string {
    return this._name;
  }

  public resetName(): void {
    this.nameGenerator();
  }

  public static releaseNames(): void {
    Robot._names.clear();
  }


  private nameGenerator() {

    const _LETTERS: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const nameCounter = Robot._names.size;

    while (nameCounter == Robot._names.size) {

      let letters = '';
      let numbers = '';

      for (let i = 0; i < 2; i++) {
        letters += _LETTERS[Math.floor(Math.random() * 27)];
      }

      if (!Robot._namesMap.has(letters)) {
        Robot._namesMap.set(letters, new Set<string>());
      }

      if (Robot._namesMap.has(letters) && Robot._namesMap.get(letters)!.size == 1000) {
        break;
      }

      for (let i = 0; i < 3; i++) {
        numbers += Math.floor((Math.random() * 10));
      }

      Robot._namesMap.get(letters)!.add(numbers);
      Robot._names.add(this._name = letters + numbers);
      //console.log(this._name);
    }
  }
}

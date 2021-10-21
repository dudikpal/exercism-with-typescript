export class Matrix {

  private _rows: number[][];

  private _columns: number[][];

  constructor(input: string) {

    this._rows = [];
    this._columns = [];
    const rows: string[] = input.split('\n');

    for (let i = 0; i < rows.length; i++) {
      const numbers: number[] = rows[i].split(' ').map(Number);

      this._rows[i] = [];
      this._rows[i].push(...numbers);

      for (let j = 0; j < numbers.length; j++) {

        if (this._columns.length < numbers.length) {
          this.columns[j] = [];
        }

        this._columns[j][i] = this._rows[i][j];
      }
    }
  }

  get rows(): number[][] {
    return this._rows;
  }

  get columns(): number[][] {
    return this._columns;
  }
}

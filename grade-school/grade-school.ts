export class GradeSchool {

  private grades: Map<string, string[]> = new Map();


  roster() {
    [this.grades.entries()]
        .sort();
    const newMap = new Map();
    this.grades.forEach((names, grade) => newMap.set(grade, new Array(...names)));
    return Object.fromEntries(newMap);
  }


  add(name: string, grade: number) {

      const existName = Array.from(this.grades.values()).filter((names => names.includes(name))).length !== 0;
      let actual = this.grades.get(grade.toString());

      if (existName) {
          this.grades.forEach((names, grade) => {
              const index = names.indexOf(name);
              if (index !== -1) {
                  names.splice(index, 1);
              }
          })
      }

      if (!actual) {
          this.grades.set(grade.toString(), []);
          actual = this.grades.get(grade.toString());
      }
      actual!.push(name);
      actual!.sort();
  }


  grade(grade: number) {
      if (!this.grades.has(grade.toString())) {
          return [];
      }
      return new Array(...this.grades.get(grade.toString())!);

  }
}

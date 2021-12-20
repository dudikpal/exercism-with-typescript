export class GradeSchool {

  private grades: Map<string, string[]> = new Map();


  roster() {
    [this.grades.entries()]
        .sort();

    return Object.fromEntries(this.grades);
  }


  add(name: string, grade: number) {

      const existName = Array.from(this.grades.values()).filter((names => names.includes(name))).length !== 0;
      let actual = this.grades.get(grade.toString());

      if (existName) {
          for (const student of this.grades.values()) {
              const index: number = student.indexOf(name);
              if (index !== -1) {
                  console.log(this.grades.get(grade.toString()));
              }
          }
      }

      if (!actual) {
          this.grades.set(grade.toString(), []);
          actual = this.grades.get(grade.toString());
      }
      actual.push(name);
      actual.sort();
  }


  grade(grade: number) {
      return this.grades.get(grade.toString());

  }
}

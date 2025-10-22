export class StudentModel {
  name!: string;
  age!: number;
  rollNo!: number;
  phone!: number;

  constructor(name: string, age: number, rollNo: number, phone: number) {
    this.name = name;
    this.age = age;
    this.rollNo = rollNo;
    this.phone = phone;
  }
}

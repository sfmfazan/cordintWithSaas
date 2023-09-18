// Use type for every place you suggested below for typescript
// If no errors in vscode then all tasks are finished, congrats
// fix all errors
// task 1
const username: string = "arif";
let age: number = 32;
let company: string = "DCI";
let male: boolean = true;
// task 2
let favLanguages: any = ["js", "nodejs", "typescript"];
// task 3
let user: {
  id: string;
  name: string;
  city: string;
};
user = {
  id: "1",
  name: "arif",
  city: "Essen",
};
// task 4
function multiplication(a: any | number, b: any | number) {
  return a * b;
}
multiplication("5", "6");
// task 5
function fullname(firstName: any, lastName: string) {
  return firstName + " " + lastName;
}
fullname("Arif", "ahmed");
// task 6
function fullname2(firstName: string, lastName: string): string {
  return firstName + " " + lastName;
}
fullname2("Arif", "ahmed");
// task 7
let skills: any[] = ["html5", "css3", "js"];
skills.push(150);
// task 8
let myData: any | number[];
myData = ["Vassilis", 23, "DCI", true, "greece"];

// task 9: tuple type

let myTuple: [number, string];
myTuple = [2, "number of my childrens"];
myTuple = [2, "number of my passports"];
myTuple = [3, "six"];
myTuple = [3, "Deutscher"];

// task 10: enum, group of constant value
enum SettingEnum {
  PORT = 5000,
  Host = "localhost",
  DB_LINK = "mongodb connection",
  api_key = 12,
  September,
  October,
}
function displayEnum(data: SettingEnum) {
  let result: string = "";
  switch (data) {
    case SettingEnum.PORT:
      result = "This is running on PORT " + data;
      break;
    case SettingEnum.September:
      result = "This Month is: " + data;
      break;
    case SettingEnum.October:
      result = "This Month is: " + data;
      break;
    case SettingEnum.Host:
      result = "This running is: " + data;
      break;

    // write rest of the cases
  }
  return result;
}
displayEnum(SettingEnum.PORT);
displayEnum(5000);
displayEnum(SettingEnum.Host);
displayEnum(SettingEnum.October);

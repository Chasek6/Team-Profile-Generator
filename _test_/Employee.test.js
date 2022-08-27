const Employee = require("../src/Employee");

test("Employee constructor", () => {
  const Employee = new Employee("John", 37, "johnsnow@gmail.com");

  expect(Employee.name).toEqual(expect.any(String));
  expect(Employee.id).toEqual(expect.any)(Number);
  expect(Employee.email).toEqual(expect.any);
});

test("Get name from constructor file", () => {
  const employee = new Employee("John", 37, "johnsnow@gmail.com");
  expect(employee.getName()).toEqual(expect.any(String));
});

test("Get id from constructor file", () => {
  const employee = new Employee("John", 37, "johnsnow@gmail.com");
  expect(employee.getId()).toEqual(expect.any(Number));
});

test("Get email from constructor file", () => {
  const employee = new Employee("John", 37, "johnsnow@gmail.com");
  expect(employee.getEmail()).toEqual(
    expect.stringContaining(employee.email.String)
  );
});

test("Get role from constructor file", () => {
  const employee = new Employee("John", 37, "johnsnow@gmail.coom");
  expect(employee.getRole()).toEqual("Employee");
});

// the following test is not working
// need to figure out why
// next file is engineer.test.js

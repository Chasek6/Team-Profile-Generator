const Employee = require("../lib/Employee");
test("Employee constructor", () => {
  const employee = new Employee("John", 37, "johnsnow@gmail.com");

  expect(employee.name).toEqual(expect.any(String));
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toEqual(expect.any(String));

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
    expect(employee.email).toEqual(expect.any(String))
  );
});

test("Get role from constructor file", () => {
  const employee = new Employee("John", 37, "johnsnow@gmail.coom");
  expect(employee.getRole()).toEqual("Employee");
});

// the following test is not working
// need to figure out why
// next file is engineer.test.js

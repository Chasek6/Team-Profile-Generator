const Intern = require("../lib/Intern");
// test("Intern constructor", () => {
//   const intern = new Intern("August", 21, "Augustagust@gmail.com","UFC");
//   // expect(intern.school).toEqual(expect.any(String));
//   // expect(intern.name).toEqual(any(String));
//   expect(intern.id).toEqual(expect.any(Number));
// });
// // next test is from intern.test.js
// // not understanding the above test  ***************************
// test("Get school from constructor file", () => {
//   const intern = new Intern("August", 21, "Augustagust@gamil.com", "UFC");
//   expect(intern.getSchool()).toBe("UFC");
// });
// test("Get role from constructor file", () => {
//   const intern = new Intern("August", 21, "Augustagust@gmail.com");
//   expect(employee.getRole()).toEqual("Intern");
// });


test("Can set school via constructor", () => {
  const testValue = "UCLA";
  const e = new Intern("Foo", 1, "test@test.com", testValue);
  expect(e.school).toBe(testValue);
});

test("getRole() should return \"Intern\"", () => {
  const testValue = "Intern";
  const e = new Intern("Foo", 1, "test@test.com", "UCLA");
  expect(e.getRole()).toBe(testValue);
});

test("Can get school via getSchool()", () => {
  const testValue = "UCLA";
  const e = new Intern("Foo", 1, "test@test.com", testValue);
  expect(e.getSchool()).toBe(testValue);
});
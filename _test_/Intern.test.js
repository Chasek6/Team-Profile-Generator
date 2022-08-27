const intern = require("../src/Intern");
test("Intern constructor", () => {
  const intern = new Intern("August", 21, "Augustagust@gmail.com", "august123");
  expect(intern.school).toEqual(expect.any(String));
});
// next test is from intern.test.js
// not understanding the above test  ***************************
test("Get school from constructor file", () => {
  const intern = new Intern("August", 21, "Augustagust@gamil.com", "august123");
  expect(intern.getSchool()).toEqual(
    expect.stringContaining(intern.school.String)
  );
});
// next test is from manager.test.js
// not understanding the above test  ***************************

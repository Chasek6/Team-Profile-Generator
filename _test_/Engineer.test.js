const Engineer = require("../lib/Engineer");

test("Can set github constructor", () => {
  const engineer = new Engineer(  "Nicki",  39, "nickipetty@gmail.com","nickipetty");
  expect(engineer.github).toStrictEqual(expect.any(String));
});

test('getRole() should return "Engineer"', () => {
  const testValue = "Engineer";
  const e = new Engineer("Foo", 1, "test@test.com", "nicki123");
  expect(e.getRole()).toBe(testValue);
});

test("Can set github", () => {
  const testValue = "anyGithub";
  const e = new Engineer("Foo", 1, "test@test.com", testValue);
  expect(e.getGithub()).toBe(testValue);
});

test("Engineer constructor instantiates correctly", () => {
  const e = new Engineer();

  expect(typeof e).toBe("object");
});
// next test is from intern.test.js
// confused about the above test  *************************

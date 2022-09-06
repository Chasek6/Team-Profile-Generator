const Engineer = require("../lib/Engineer");
test("Engineer constructor", () => {
  const engineer = new Engineer(
    "Nicki",
    39,
    "nickipetty@gmail.com", "nickipetty"
  );
  expect(engineer.github).toStrictEqual(expect.any(String));
});






test("Engineer constructor instantiates correctly", () => {
  const e = new Engineer();

expect (typeof(e)).toBe("object"); 
});
// next test is from intern.test.js
// confused about the above test  *************************
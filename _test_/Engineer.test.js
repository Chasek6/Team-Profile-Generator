const engineer = require("../src/Engineer");
test("Engineer constructor", () => {
  const engineer = new Engineer(
    "Nicki",
    39,
    "nickipetty@gmail.com",
    "Npetty123"
  );
  expect(engineer.github).toEqual(expect.any(String));
});
// next test is from engineer.test.js
// not understanding the above test  ***************************

test("Get github from constructor file", () => {
  const engineer = new Engineer(
    "Nicki",
    39,
    "nickipetty@gmail.com",
    "Npetty123"
  );
  expect(engineer.getGithub()).toEqual(
    expect.stringContaining(engineer.github.String)
  );
});

// next test is from intern.test.js
// confused about the above test  ***************************

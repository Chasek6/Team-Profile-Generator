const manager = require("../src/Manager");
test("Manager constructor", () => {
  const manager = new Manager("Max", 27, "Maxpro@gmail.com", "Maxpro123");
  expect(manager.officeNumber).toEqual(expect.any(Number));
});
// next test is from manager.test.js
// not understanding the above test  ***************************

test("Get officeNumber from constructor file", () => {
  const manager = new Manager("Max", 27, "Maxpro@gmail.com", "Maxpro123");
  expect(manager.getOfficeNumber()).toEqual(
    expect.stringContaining(manager.officeNumber.Number)
  );
});

// no clue what the above test is doing ***************************

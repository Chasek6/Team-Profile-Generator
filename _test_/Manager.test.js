const Manager = require("../lib/Manager");
test("Manager constructor", () => {
  const manager = new Manager("Max", 27, "Maxpro@gmail.com", 123);
  expect(manager.officeNumber).toEqual(expect.any(Number));
  expect(manager.id).toEqual(expect.any(Number));
});
// next test is from manager.test.js
// not understanding the above test  ***************************
test('getRole() should return "Manager"', () => {
  const testValue = "Manager";
  const e = new Manager("Foo", 1, "test@test.com", "nicki123");
  expect(e.getRole()).toBe(testValue);
});

test("Get officeNumber from constructor file", () => {
  const phoneNumber = 123;
  const manager = new Manager("Max", 27, "Maxpro@gmail.com", phoneNumber);
  expect(manager.getOfficeNumber()).toBe(phoneNumber);
});

// no clue what the above test is doing ***************************

const login = require("./login");

test("Login successfully", () => {
    expect(login("admin", "123")).toBe(true);
});

test("Login fails with wrong password", () => {
    expect(login("admin", "1234")).toBe(false);
});

test("Login fails with wrong username", () => {
    expect(login("user", "123")).toBe(false);
});

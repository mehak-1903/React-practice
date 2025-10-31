// import { validate } from "./validation.jsx";
// import '@testing-library/jest-dom';

// test("returns error when name is missing", () => {
//     const result = validate({ name: "", email: "test@gmail.com"});
//     expect(result.name).toBe("Name is required");
// });

// test("returns error when email is required", () => {
//     const result = validate({name: "Mehak", email: ""});
//     expect(result.email).toBe("Email is required")
// });

// test("returns error when email format is incorrect", () => {
//     const result = validate({name: "Mehak", email: "mehak@wrong"});
//     expect(result.email).toBe("Invalid email format.")
// });

// test("returns no errors when valid inputs are given", () => {
//     const result = validate({name: "Mehak", email: "mehak@gmail.com"});
//     expect(result).toEqual({});
// })
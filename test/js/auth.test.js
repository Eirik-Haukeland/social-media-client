import { login, logout } from "../../src/js/api/auth/index.js";
import {expect, beforeAll, describe, it} from '@jest/globals'
import localStorageMock from "../mocks/localStorage";

beforeAll(() => {
  global.localStorage = new localStorageMock();
  localStorage.clear();
})
describe("auth", () => {


  it('testing logout function', () => {
    const myTestValue = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9'

    localStorage.setItem('token', myTestValue)

    logout()

    expect(localStorage.getItem('token')).toBe(null)
  })

  it("testing login function", () => {

    const username = 'ReservedUserName5'
    const email = `${username}@stud.noroff.no`;
    const password =  'testpassword';

    login(email, password)

    expect(localStorage.getItem('token')).toBe(/^Bearer [a-zA-Z0-9]*$/);
  });
});
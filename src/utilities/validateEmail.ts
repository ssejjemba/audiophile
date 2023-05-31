import Errors from "../constants/EmailError";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function validateEmail(email: any): string {
  if (!email) {
    console.log("empty_email");
    return Errors.EMPTY_EMAIL;
  }

  const pattern = /^[a-zA-Z][^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!pattern.test(email)) {
    console.log("Invalid_Email");
    return Errors.INVALID_EMAIL;
  }

  return Errors.NO_ERROR;
}

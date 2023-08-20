import * as auth from "../../api/auth/index";
import { updateLoginVisibility } from "../../ui/auth";

export function logoutListener() {
  try {
    auth.logout();
    updateLoginVisibility();
    location.href = "./";
  } catch {
    return alert("There was a problem logging out");
  }
}

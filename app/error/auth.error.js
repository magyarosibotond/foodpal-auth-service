import { HttpError } from "./http.error";

export class AuthError extends HttpError {
  
  constructor() {
    super(401, 'Unauthorized');
  }
}

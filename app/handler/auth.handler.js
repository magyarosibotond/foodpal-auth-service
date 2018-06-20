import { tokenService } from "../service/token.service";
import { AuthError } from "../error";

export function isAuthenticated(req, res, next) {
  var userId = tokenService.verify(request.headers.authorization)

  if (userId != null) {
    req.me = userId;
    return next();
  }

  next(new AuthError());
}

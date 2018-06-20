import { AuthError } from "../error";
import { Authorization } from "../domain/authorization";

import { tokenRepository, userRepository } from '../repository';

class AuthService {
  
  signIn(username, password) {
    return userRepository.findBy(username, password).then((user) => {
      const token = tokenRepository.create(user.id, user.roles);
      return new Authorization(token).serialize();
    }).catch((err) => {
      console.log(err.stack);
      throw new AuthError();
    });
  }

  signUp(firstName, lastName, username, password) {
    return userRepository.create(firstName, lastName, username, password).then((user) => {
      const token = tokenRepository.create(user.id, user.roles);
      return new Authorization(token).serialize();
    }).catch((err) => {
      console.log(err.stack);
      throw new AuthError();
    });
  }
}

export const authService = new AuthService();

import { AuthError } from '../error';

import { userRepository } from '../repository';

class ProfileService {

  findBy(id) {
    userRepository.findBy(id).then((user) => {
      resolve(user);
    }).catch((err) => {
      console.log(err.trace);
      reject(new AuthError());
    });
  }
}

export const profileService = new ProfileService();

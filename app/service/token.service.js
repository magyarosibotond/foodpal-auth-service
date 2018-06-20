import jwt from 'jsonwebtoken';

class TokenService {

  constructor() {
    this.secret = process.env.JWT_SECRET;
  }

  create(id, roles) {
    return jwt.sign({ id: id, roles: roles }, this.secret, { expiresIn: 2 * 60 * 60 }); // 2 hours
  }

  verify(token) {
    try {
      const decoded = jwt.verify(token, this.secret)
      return decoded.id
    } catch(err) {
      return null;
    }
  }
}

export const tokenService = new TokenService();

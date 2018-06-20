import jwt from 'jsonwebtoken';

// TODO: Store tokens in Redis

class TokenRepository {

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

export const tokenRepository = new TokenRepository();

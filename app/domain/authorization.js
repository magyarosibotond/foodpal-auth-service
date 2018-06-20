export class Authorization {
  
  constructor(token) {
    this.token = token;
  }

  serialize() {
    return { token: this.token }
  }
}

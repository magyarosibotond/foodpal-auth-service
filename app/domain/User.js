import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const { Model, Schema } = mongoose

var schema = Schema({
  firstName: String,
  lastName: String,
  email: {
    type: String,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
});

class User extends Model {
  
  static generateHash(password) {
    return bcrypt.hashSync(password, 8);
  }

  validPassword(password) {
    return bcrypt.compareSync(password, this.password);
  }
}

module.exports = mongoose.model(User, schema, 'user');

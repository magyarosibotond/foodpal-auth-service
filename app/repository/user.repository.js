const mongoose = require('mongoose');
mongoose.connect('mongodb://' + process.env.MONGO_SERVICE_HOST + '/auth');

import User from '../domain/User';

class UserRepository {

  findBy(id) {
    return new Promise((resolve, reject) => {
      User.findOne({ '_id': id}, (err, user) => {
        if (err) reject(err);
        else resolve(user);
      });
    });
  }

  findBy(email, password) {
    return new Promise((resolve, reject) => {
      User.findOne({ 'email': email}, (err, user) => {
        if (err) 
          reject(err);
        else if (user.validPassword(password)) 
          resolve(user);
        else
          reject('error');
      });
    });
  }

  create(firstName, lastName, email, password) {
    return new Promise((resolve, reject) => {
      var user = new User({
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: User.generateHash(password)
      });
      user.save(err => {
        if (err) reject(err);
        else resolve(user);
      });
    });
  }
}

export const userRepository = new UserRepository();

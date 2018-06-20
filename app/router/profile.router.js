const express = require('express');
var router = express.Router();

import { profileService } from '../service';
import { isAuthenticated } from '../handler/auth.handler';

router.get('/profile', isAuthenticated, (req, res, next) => {
  profileService.findBy(req.me)
    .then((user) => {
      res.send(user);
    }).catch((err) => {
      next(err);
    });
});

export { router as profileRouter };
const express = require('express');
var router = express.Router();

import { authService } from '../service';
import { notificationService } from '../service/notification.service';

router.post('/sign_in', (req, res, next) => {
  authService.signIn(req.body.email, req.body.password)
    .then((authorization) => {
      res.send(authorization);
    }).catch((err) => {
      next(err);
    });
});

router.post('/sign_up', (req, res, next) => {
  authService.signUp(req.body.first_name, req.body.last_name, req.body.email, req.body.password)
    .then((authorization) => {
      notificationService.sendEmail(req.body.email, 'Hey ' + req.body.email + '! Welcome to FoodPal!');
      res.send(authorization);
    }).catch((err) => {
      next(err);
    });
});

export { router as authRouter };

import request from 'request';

class NotificationService {

  constructor() {
    // Inject service through env var
    this.serviceUrl = 'foodpal-notification-service.default.svc.cluster.local';
  }

  sendEmail(email, body) {
    const options = {
      url: this.serviceUrl + '/send/email',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        email: email,
        body: body
      })
    }

    request(options, (err, res, body) => {
      if (err) console.error(err);
      else console.log(body);
    });
  }

  sendSms(phoneNumber, text) {
    const options = {
      url: this.serviceUrl + '/send/sms',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        phone_number: phoneNumber,
        message: message
      })
    }

    request(options, (err, res, body) => {
      if (err) console.error(err);
      else console.log(body);
    });
  }
}

export const notificationService = new NotificationService();

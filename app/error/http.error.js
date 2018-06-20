export class HttpError {
  
  constructor(status, message) {
      this.status = status;
      this.message = message || 'Internal Server Error';
  }

  serialize() {
      return {
          status: this.status || 500,
          message: this.message
      };
  }

  static serialize(error) {
      if (error instanceof HttpError) {
          return error.serialize();
      }

      return {
          status: error.status || 500,
          message: error.message
      };
  }
}
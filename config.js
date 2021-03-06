const env = process.env;

export const nodeEnv = env.NODE_ENV || 'development';

export const logStars = function(message) {
  console.info('**********');
  console.info(message);
  console.info('**********');
};

export default {
  port: env.PORT || 8282,
  host: process.argv[2] || '0.0.0.0',
  api: 'http://localhost:8181',
  get serverUrl() {
    return `http://${this.host}:${this.port}`;
  }
};

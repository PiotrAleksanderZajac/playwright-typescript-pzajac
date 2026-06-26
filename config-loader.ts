const ENV = process.env.ENV || 'dev';
const config = require(`./config/${ENV}.ts`).default;

export default config;
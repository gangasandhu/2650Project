// config.js
import * as dotenv from 'dotenv';

dotenv.config();

const config = {
  database: process.env.DATABASE_PATH,
  secretKeyJWT: process.env.SECRET_KEY_JWT,
  port: process.env.PORT || 3000,
};

export default config;
// sql lite implementation so that in future easier to switch to the sql database

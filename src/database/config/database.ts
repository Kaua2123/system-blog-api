import 'dotenv/config';
import { Options } from 'sequelize';

const { DATABASE, DATABASE_HOST, DATABASE_USERNAME, DATABASE_PASSWORD } =
  process.env;

const config: Options = {
  username: DATABASE_USERNAME,
  password: DATABASE_PASSWORD,
  database: DATABASE,
  host: DATABASE_HOST,
  dialect: 'mariadb',
};

export = config;

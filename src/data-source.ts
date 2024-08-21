import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { OtpToken } from './entity/OtpToken';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'root',
  database: 'test_database',
  synchronize: true,
  logging: false,
  entities: [OtpToken],
  migrations: [],
  subscribers: []
});

export default AppDataSource;

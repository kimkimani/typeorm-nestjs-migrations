import { DataSource, DataSourceOptions } from 'typeorm';

export const dbdatasource: DataSourceOptions = {
  // TypeORM PostgreSQL DB Drivers
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'pass',
    // Database name
    database: 'task',
    // Synchronize database schema with entities 
    synchronize: false,
    // TypeORM Entity
    entities: ['build/task/task.entity.js'],
    // Your Migration path
    migrations: ['build/task/migrations/*.js'],
    migrationsTableName: "task_migrations",

};

const dataSource = new DataSource(dbdatasource)
export default dataSource
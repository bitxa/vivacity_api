"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    type: process.env.DATABASE_TYPE,
    host: process.env.DATABASE_HOST,
    port: parseInt(process.env.DATABASE_PORT),
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    synchronize: false,
    logging: false,
    entities: ['dist/**/*.entity.js'],
    migrations: ['dist/migration/**/*.js'],
    subscribers: ['dist/subscriber/**/*.js'],
    cli: {
        entitiesDir: 'src/orm/entity',
        migrationsDir: 'src/orm/migration',
        subscribersDir: 'src/orm/subscriber',
    },
};
//# sourceMappingURL=ormconfig.js.map
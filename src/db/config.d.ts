import { SequelizeOptions } from 'sequelize-typescript';

interface Config {
    development: SequelizeOptions;
    test: SequelizeOptions;
}

declare module '@/db/config.js' {
    const config: Config;

    export = config;
}
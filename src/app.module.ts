import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { AdminModule } from './admin/admin.module';
import { UserModule } from './app/user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    SequelizeModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (cfg: ConfigService) => ({
        dialect: cfg.get('DB_DIALECT'),
        host: cfg.get('DB_HOST'),
        port: Number(cfg.get('DB_PORT')),
        username: cfg.get('DB_USER'),
        password: cfg.get('DB_PASSWORD'),
        database: cfg.get('DB_NAME'),
        models: [],
        autoLoadModels: true,
        define: { timestamps: false, collate: 'utf8mb4_general_ci' },
        timezone: '+06:00',
        logging: false ,
      })
    }),
    UserModule,
    AdminModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }

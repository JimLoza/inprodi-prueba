import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './components/user/user.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './components/auth/auth.module';
import envConfig from './config/env.config';

@Module({
  imports: [
    UserModule,
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: envConfig().DATABASE.host,
      port: +envConfig().DATABASE.port,
      username: envConfig().DATABASE.username,
      password: envConfig().DATABASE.pasword,
      database: envConfig().DATABASE.database,
      autoLoadEntities: true,
      synchronize: true
    }),
    AuthModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }

import 'dotenv/config';
import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { HealthModule } from './health/health.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [UserModule, HealthModule, DatabaseModule],
})
export class AppModule {}

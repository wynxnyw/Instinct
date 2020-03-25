import 'dotenv/config';
import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { HealthModule } from './health/health.module';
import { ArticleModule } from './article/article.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [ArticleModule, UserModule, HealthModule, DatabaseModule],
})
export class AppModule {}

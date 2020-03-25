import 'dotenv/config';
import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { HealthModule } from './health/health.module';
import { CommonModule } from './common/common.module';
import { SessionModule } from './session/session.module';
import { ArticleModule } from './article/article.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [
    ArticleModule,
    CommonModule,
    UserModule,
    HealthModule,
    DatabaseModule,
    SessionModule,
  ],
})
export class AppModule {}

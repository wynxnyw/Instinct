import { Module } from '@nestjs/common';
import { ArticlePipe } from './article.pipe';
import { ArticleService } from './article.service';
import { ArticleController } from './article.controller';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [ArticleController],
  providers: [ArticlePipe, ArticleService],
  exports: [ArticlePipe, ArticleService],
})
export class ArticleModule {}

import { NewArticleDTO } from './article.dto';
import { ArticleService } from './article.service';
import { Article } from '../interface/article/Article';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ArticleEntity, articleWire } from '../database/entity/article';
import { ArticlePipe } from './article.pipe';

@Controller('articles')
export class ArticleController {
  constructor(private readonly articleService: ArticleService) {}

  @Post()
  async create(@Body() newArticle: NewArticleDTO): Promise<Article> {
    const article: ArticleEntity = await this.articleService.create(newArticle);
    return articleWire(article);
  }

  @Get('articleID')
  getByID(@Param('articleID', ArticlePipe) article: ArticleEntity): Article {
    return articleWire(article);
  }
}

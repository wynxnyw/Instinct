import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ArticleEntity } from '../database/entity/article';

@Injectable()
export class ArticleService {
  constructor(
    @InjectRepository(ArticleEntity)
    private readonly articleRepo: Repository<ArticleEntity>,
  ) {}

  create(article: ArticleEntity): Promise<ArticleEntity> {
    return this.articleRepo.save(article);
  }

  getByID(articleID: number): Promise<ArticleEntity> {
    return this.articleRepo.findOneOrFail(articleID);
  }
}

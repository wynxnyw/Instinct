export * from './user';
export * from './article';

import { UserEntity } from './user';
import { ArticleEntity } from './article';

export const databaseEntities: Function[] = [ArticleEntity, UserEntity];

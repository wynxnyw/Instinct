import {Provider} from '@nestjs/common';
import {PhotoEntity, PhotoRepository} from './photo';
import {GroupEntity, GroupRepository} from './group';
import {RankEntity, RankRepository} from './rank';
import {RoomEntity, RoomRepository} from './room';
import {ConfigEntity, ConfigRepository} from './config';
import {BetaCodeEntity, BetaCodeRepository} from './beta-code';
import {
  ArticleCategoryRepository,
  ArticleEntity,
  ArticleCategoryEntity,
  ArticleRepository,
} from './article';
import {
  UserBadgesEntity,
  UserForgotPasswordEntity,
  UserForgotPasswordRepository,
  UserBanEntity,
  UserBanRepository,
  UserEntity,
  UserRepository,
} from './user';


export const databaseEntities: Function[] = [
  ArticleEntity,
  ArticleCategoryEntity,
  PhotoEntity,
  UserForgotPasswordEntity,
  GroupEntity,
  RankEntity,
  UserEntity,
  UserBadgesEntity,
  RoomEntity,
  ConfigEntity,
  UserBanEntity,
  BetaCodeEntity,
];

export const databaseRepositories: Provider[] = [
  ConfigRepository,
  UserForgotPasswordRepository,
  ArticleRepository,
  ArticleCategoryRepository,
  RankRepository,
  UserBanRepository,
  UserRepository,
  RoomRepository,
  GroupRepository,
  PhotoRepository,
  BetaCodeRepository,
];

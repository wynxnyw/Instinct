import { IsNumber, IsString } from 'class-validator';

export class NewArticleDTO {
  @IsString()
  title!: string;

  @IsString()
  description!: string;

  @IsString()
  content!: string;

  @IsString()
  imagePath!: string;

  @IsNumber()
  userID!: number;
}

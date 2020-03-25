import { User } from '../';
export interface Article {
    id: number;
    title: string;
    description: string;
    content: string;
    datePosted: number;
    imagePath: string;
    author: User;
}
export declare const exampleArticle: Article;

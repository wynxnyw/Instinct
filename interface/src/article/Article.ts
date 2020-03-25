import { exampleUser, User } from '../';

export interface Article {
  id: number;
  title: string;
  description: string;
  content: string;
  datePosted: number; // Epoch time
  imagePath: string;
  author: User;
}

export const exampleArticle: Article = {
  id: 1,
  title: 'Test Article',
  description: 'Testing the news',
  content: 'I am testing the news',
  datePosted: +new Date() / 1000,
  imagePath: '/img/article-1.png',
  author: exampleUser,
};

import React from "react";
import { useBestArticles } from "../../hooks/useBestArticles";

export interface IBestArticlesContent {
  id: string;
  title: string;
  createDate: string;
  authorName: string;
  authorImg: string;
  articleImg: string;
  score: string;
  subreddit: string;
  comments: 
    {
      id: string;
      commentAuthorImg: string;
      commentAuthorName: string;
      commentDate: string;
      league: string;
      commentText: string;
    }[];
  }

export const bestArticleContext = React.createContext<IBestArticlesContent[]>([]);

export function BestArticleContextProvider({ children }: { children: React.ReactNode}) {
  const [cardList] = useBestArticles();

  return (
    <bestArticleContext.Provider value={cardList}>
      {children}
    </bestArticleContext.Provider>
  )
}

import { Reducer } from "redux"
import { GET_ARTICLES } from "./contentConst"

export interface ICard {
  id: string;
  title: string;
  createDate: string;
  authorName: string;
  authorImg: string;
  articleImg: string;
  score: string;
  subreddit: string,
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

export type TContentReducer = {
  articles: ICard[],
  loading_count: number,
  cursor_num: string,
}

const initialState:TContentReducer = {
  articles: [],
  loading_count: 1,
  cursor_num: "",
}

export const contentReducer: Reducer<TContentReducer> = (
  state = initialState,
  action
) => {
  switch(action.type) {
    case GET_ARTICLES:
      return {
        ...state,
        articles: state.articles.concat(action.articles),
        loading_count: state.loading_count + 1,
        cursor_num: action.cursor_num,
      };
      default:
        return state;
  };
};

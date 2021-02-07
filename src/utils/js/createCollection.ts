import { ICard } from "../../store/contentReducer/contentReducer";

export function createCollection(originalArr: Array<any>, data: string) {
  let collection: ICard[] = [];

  for (let obj of originalArr) {
    const myObj: ICard = {
      id: "",
      title: "",
      createDate: "",
      authorName: "",
      authorImg: "",
      articleImg: "",
      score: "",
      subreddit: "",
      comments: [
        {
          id: "",
          commentAuthorImg: "",
          commentAuthorName: "",
          commentDate: "",
          league: "",
          commentText: "",
        },
      ],
    };

    for (const key in obj[data]) {
      switch (key) {
        case "id":
          myObj.id = obj[data][key];
          break;
        case "title":
          myObj.title = obj[data][key];
          break;
        case "created_utc":
          myObj.createDate = obj[data][key].toString() + "000";
          break;
        case "author":
          myObj.authorName = obj[data][key];
          break;
        // case "thumbnail": score
        //   myObj.authorImg=obj[data][key];
        //   break;
        case "thumbnail":
          myObj.articleImg = obj[data][key];
          myObj.authorImg = obj[data][key];
          break;
        case "score":
          myObj.score = obj[data][key].toString();
          break;
        case "subreddit":
          myObj.subreddit = obj[data][key];
          break;
        default:
          break;
      }
    }
    collection.push(myObj);
  }
  return collection;
}

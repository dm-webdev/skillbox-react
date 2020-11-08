import { ICard } from "../../shared/Layout/Content/CardsList";

export function createCollection(originalArr: Array<any>, data: string) {
  let collection:ICard[] = [];

  for (let obj of originalArr) {
    const myObj:ICard = {
      id: "",
      title: "",
      createDate: "",
      authorName: "",
      authorImg: "",
      articleImg: "",
      score: "",
    };
  
    for (const key in obj[data]) {
      switch(key) {
        case "id":
          myObj.id=obj[data][key];
          break;
        case "title":
          myObj.title=obj[data][key];
          break;
        case "created_utc":
          myObj.createDate=obj[data][key].toString() + "000";
          break;
        case "author":
          myObj.authorName=obj[data][key];
          break;
        // case "thumbnail": score
        //   myObj.authorImg=obj[data][key];
        //   break;
        case "thumbnail":
          myObj.articleImg=obj[data][key];
          myObj.authorImg=obj[data][key];
          break;
        case "score": 
          myObj.score=obj[data][key].toString();
        break;
        default:
          console.log("no entries");
        break;
      }
    }      
    collection.push(myObj);
  }
  return collection;
}
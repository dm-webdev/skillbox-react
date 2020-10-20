import React from "react";
import { hot } from "react-hot-loader/root";

import "./shared/assets/css/main.global.css";
import "./shared/assets/css/normalize.global.css";
import "./shared/assets/css/fonts.global.css";

import { Layout } from "./shared/Layout";
import { Content } from "./shared/Layout/Content";
import { CardsList } from "./shared/Layout/Content/CardsList";
import { Header } from "./shared/Layout/Header";
import { getValue } from "./utils/react/getValue";
import { MyHooks } from "./lernMapp/react/HooksExsample";
import { useIsMounted } from "./utils/react/useIsMounted"
// import { MyList } from "./lernMapp/react/GenericList";
import { assignId, generateRandomString, generateId } from "./utils/react/generateRandomIndex"
import { merge } from "./utils/js/merge";
import { GenericList } from "./lernMapp/react/GenericList";
import { CardMenu } from "./shared/Layout/Content/Card/CardMenu";
import { relative } from "path";
import { Dropdown } from "./lernMapp/react/Dropdown";
import database from "./shared/assets/database";


const LIST = [
  // { value: "some" },
  // { value: "other some" },
  // { value: "some" },
  // { text: "some" },
  // { text: "other some" },
  // { text: "some" },
  {As: "li" as const, text: "some" },
  {As: "li" as const, text: "other some" },
  {As: "li" as const, text: "some" },
].map(generateId);
// ].map((item) => ({ ...item, id: generateRandomString() }))

function AppComponent() {

  // const [isVisible, setIsVisible] = React.useState(true);

  const [title, setTitle] = React.useState("");

  const [isVisible] = useIsMounted();

  const [list, setList] = React.useState(LIST);

  const handleItemClick = (id: string) => {
    // console.log(id);
    setList(list.filter((item) => item.id !== id));
  }

  const handleAdd = () => {
    setList(list.concat(generateId({ text: generateRandomString(), As: "li" as const })))
  }

  return (
    <Layout>
      <Header />
      <Content>
        <CardsList list={ database } />
      </Content>
      
      {/* <button onClick={() => setIsVisible(!isVisible)}>Change me!</button> */}
      <input type="text" onChange={getValue(setTitle)}/>
      {isVisible && <MyHooks title={title} id="key" />}

      {/* <MyList list={[{ value: "some", id: "one" }, { value: "other some", id: "two" }]} onClick={ console.log} /> */}

      {/* <MyList list={ LIST } onClick={ console.log}/> */}

      {/* <MyList list={ LIST.map((item) => ({ ...item,  onClick: () => { console.log(item.id) }})) }/> */}
      {/* <MyList list={ LIST.map(merge({ onClick: () => { console.log("click") } })) }/> */}
      {/* <MyList list={ LIST.map(merge({ onClick: handleItemClick })) }/> */}
      <button onClick={ handleAdd }>Add Element</button>
      {/* <MyList list={ list.map(merge({ onClick: handleItemClick })) }/> */}

      {/* <GenericList list={ list.map(merge({ onClick: handleItemClick })) }/> */}
      <ul>
        <GenericList list={ list.map(merge({ onClick: handleItemClick })) }/> 
      </ul>

      <div style={{ position: "relative" }}>
        <CardMenu />
      </div>
      <br />

      <Dropdown 
        onClose={ () => console.log("closed") } 
        onOpen={ () => console.log("opened") } 
        // isOpen={ false } 
        button={<button>TEST</button>}>
        {/* <ul><li>1</li></ul> */}
        {/* <ul><GenericList list={ list.map(merge({ onClick: handleItemClick })) }/></ul> */}
        <ul>
          <li onClick={console.log}>Click Me</li>
          <li>Don't Click Me</li>
          <li onClick={console.log}>Click Me</li>
        </ul>
      </Dropdown>
      

    </Layout>    
  );
};

export const App = hot(() => <AppComponent />);
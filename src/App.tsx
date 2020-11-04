import React from "react";
import { hot } from "react-hot-loader/root";

import "./shared/assets/css/main.global.css";
import "./shared/assets/css/normalize.global.css";
import "./shared/assets/css/fonts.global.css";

import { Layout } from "./shared/Layout";
import { Content } from "./shared/Layout/Content";
import { CardsList } from "./shared/Layout/Content/CardsList";
import { Header } from "./shared/Layout/Header";
import database from "./shared/assets/database";
import { Icon, EIcons } from "./utils/component/Icon";
import { Break } from "./utils/component/Break";
import { Text } from "./utils/component/Text/Text";
import { LoadingIndicator } from "./shared/Layout/Common/LoadingIndicator";


function AppComponent() {
  return (
    <Layout>
      <Header />
      <Content>
        <LoadingIndicator />
        {/* <div>
          <p>Тестовый блок для домашнего задания</p>
          <button style={{backgroundColor: "red"}}>
            <Icon name={EIcons.iconRemoveBtn} size={40}></Icon>
          </button>
          <button style={{backgroundColor: "red"}}>
            <Icon name={EIcons.iconRemoveBtn} size={30}></Icon>
          </button>
          <button style={{backgroundColor: "red"}}>
            <Icon name={EIcons.iconShareBtn} size={20}></Icon>
          </button>
          <button style={{backgroundColor: "red"}}>
            <Icon name={EIcons.iconShareBtn} size={30}></Icon>
          </button>
          <button style={{backgroundColor: "red"}}>
            <Icon name={EIcons.iconShareBtn} size={40}></Icon>
          </button>
          <button style={{backgroundColor: "red"}}>
            <Icon name={EIcons.iconRemoveBtn} size={40}></Icon>
          </button>
          <button style={{backgroundColor: "red"}}>
            <Icon name={EIcons.iconRemoveBtn} size={30}></Icon>test
          </button>
          <button style={{backgroundColor: "red"}}>
            <Icon name={EIcons.iconRemoveBtn} size={20} block></Icon> test
          </button>
          <Text size={16}>Test1</Text>
          <Break size={20} top />
          <Text size={14}>Test2</Text>        
          <Text size={20} bold={true}>Test3</Text>         
        </div> */}
        <CardsList list={database} />
      </Content>
    </Layout>
  );
}

export const App = hot(() => <AppComponent />);

import React from "react";
import { hot } from "react-hot-loader/root";

import "./shared/assets/css/main.global.css";
import "./shared/assets/css/normalize.global.css";
import "./shared/assets/css/fonts.global.css";

import { Layout } from "./shared/Layout";
import { Content } from "./shared/Layout/Content";
import { CardsList } from "./shared/Layout/Content/CardsList";
import { Header } from "./shared/Layout/Header";

function AppComponent() {
  return (
    <Layout>
      <Header />
      <Content>
        <CardsList />
      </Content>
    </Layout>    
  );
};

export const App = hot(AppComponent);
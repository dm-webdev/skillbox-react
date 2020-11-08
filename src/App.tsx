import React from "react";
import { hot } from "react-hot-loader/root";

import "./shared/assets/css/main.global.css";
import "./shared/assets/css/normalize.global.css";
import "./shared/assets/css/fonts.global.css";

import { Layout } from "./shared/Layout";
import { Content } from "./shared/Layout/Content";
import { CardsList } from "./shared/Layout/Content/CardsList";
import { Header } from "./shared/Layout/Header";
import { useToken } from "./hooks/useToken";
import { tokenContext } from "./shared/context/tokenContext";
import { UserContextProvider } from "./shared/context/userContext";
import { BestArticleContextProvider } from "./shared/context/bestArticleContext";

function AppComponent() {
  const [token] = useToken();

  return (
    <tokenContext.Provider value={token}>
      <UserContextProvider>
        <Layout>
          <Header />
          <Content>
            <BestArticleContextProvider>
              <CardsList />
            </BestArticleContextProvider>
          </Content>
        </Layout>
      </UserContextProvider>
    </tokenContext.Provider>
  );
}

export const App = hot(() => <AppComponent />);

import React, { useState } from "react";
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
import { commentContext } from "./shared/context/commentContext";

function AppComponent() {
  const [commentValue, setCommentValue] = useState("");
  const [token] = useToken();

  const CommentProvider = commentContext.Provider;

  return (
    <CommentProvider value={{
      value: commentValue,
      onChange: setCommentValue,
    }}>
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
    </CommentProvider>    
  );
}

export const App = hot(() => <AppComponent />);

import React, { useState } from "react";
import { hot } from "react-hot-loader/root";

import "./shared/assets/css/main.global.css";
import "./shared/assets/css/normalize.global.css";
import "./shared/assets/css/fonts.global.css";

import { Layout } from "./shared/Layout";
import { Content } from "./shared/Layout/Content";
import { CardsList } from "./shared/Layout/Content/CardsList";
import { Header } from "./shared/Layout/Header";
import { BestArticleContextProvider } from "./shared/context/bestArticleContext";
import { commentContext } from "./shared/context/commentContext";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { applyMiddleware, createStore } from "redux";
import { rootReducer } from "./store/rootReducer";
import thunk from "redux-thunk";
import { FormHook } from "./lernMapp/FormHook";

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

function AppComponent() {
  const [commentValue, setCommentValue] = useState("");
  const CommentProvider = commentContext.Provider;

  return (
    <Provider store={store}>
      <CommentProvider
        value={{
          value: commentValue,
          onChange: setCommentValue,
        }}
      >
        <Layout>
          <Header />
          <Content>
            <FormHook />
            <BestArticleContextProvider>
              <CardsList />
            </BestArticleContextProvider>
          </Content>
        </Layout>
      </CommentProvider>
    </Provider>
  );
}

export const App = hot(() => <AppComponent />);

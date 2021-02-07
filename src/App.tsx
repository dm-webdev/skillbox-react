import React, { useEffect, useState } from "react";
import { hot } from "react-hot-loader/root";

import "./shared/assets/css/main.global.css";
import "./shared/assets/css/normalize.global.css";
import "./shared/assets/css/fonts.global.css";

import { Layout } from "./shared/Layout";
import { Content } from "./shared/Layout/Content";
import { CardsList } from "./shared/Layout/Content/CardsList";
import { Header } from "./shared/Layout/Header";
import { commentContext } from "./shared/context/commentContext";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { applyMiddleware, createStore } from "redux";
import { rootReducer } from "./store/rootReducer";
import thunk from "redux-thunk";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { Modal } from "./shared/Layout/Modal";

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

function AppComponent() {
  const [commentValue, setCommentValue] = useState("");
  const CommentProvider = commentContext.Provider;
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <Provider store={store}>
      {isMounted && (
        <BrowserRouter>
          <CommentProvider
            value={{
              value: commentValue,
              onChange: setCommentValue,
            }}
          >
            <Layout>
              <Header />
              <Content>
                <Switch>
                  <Redirect exact from="/" to="/posts" />

                  <Redirect from="/auth" to="/posts" />

                  <Route path="/posts">
                    <CardsList />
                  </Route>

                  <Route path="/posts/:id">
                    <div>Hello world</div>
                  </Route>

                  <Route path="*">
                    <h1>404 - страница не найдена</h1>
                  </Route>
                </Switch> 
              </Content>
            </Layout>
          </CommentProvider>
        </BrowserRouter>
      )}
    </Provider>
  );
}

export const App = hot(() => <AppComponent />);

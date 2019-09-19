import React, { Component } from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import { PersistGate } from "redux-persist/lib/integration/react";
import { persistStore, persistReducer } from "redux-persist";
import Thunk from "redux-thunk";
import Main from "./components/Main";
import rootReducer from "./reducers";

const store = createStore(rootReducer, {}, applyMiddleware(Thunk));
const persistor = persistStore(store);

class App extends Component {
  resetState() {
    persistor.purge();
  }

  render() {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Main resetState={() => this.resetState()}></Main>
        </PersistGate>
      </Provider>
    );
  }
}

export default App;

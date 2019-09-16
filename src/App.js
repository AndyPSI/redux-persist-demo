import React, { Component } from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import { PersistGate } from "redux-persist/lib/integration/react";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import Thunk from "redux-thunk";
import _ from "lodash";
import Main from "./components/Main";
import reduxState from "./constants/config";
import { combineReducers } from "redux";
import { countContainer, testContainer } from "./reducers";

const countContainerConfig = {
  key: "root",
  storage: storage,
  // blackList: ["testContainer"],
  migrate: state => {
    return Promise.resolve(_.merge(reduxState, state));
  }
};

// Can create a different store for these values,
// Or can continue to not be persisted
// Can wrap a PersistGate with a different store to utilize it in render
const testContainerConfig = {
  key: "root",
  storage: storage,
  blackList: ["countContainer"],
  migrate: state => {
    return Promise.resolve(_.merge(reduxState, state));
  }
};

const rootReducer = combineReducers({
  countContainer: persistReducer(countContainerConfig, countContainer),
  testContainer: testContainer
});

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

import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter";
import texterReducer from "./texter";

export default configureStore({
  reducer: {
    // counter.nameとimportしたcounter.reducerを記述する
    counter: counterReducer,
    texter: texterReducer
  }
});

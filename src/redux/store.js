import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/addUserReducer";

const reducer = { userReducer }
const store = configureStore({ reducer });

export default store;
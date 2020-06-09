const { createStore, compose, applyMiddleware } = require("redux");
const reducer = require("./reducers/index");
const { logIn, logOut } = require("./actions/user");
const { addPost } = require("./actions/post");

const initialState = {
  user: {
    isLoggingIn: false,
    data: null,
  },
  posts: [],
  comments: [],
  favorites: [],
  history: [],
  likes: [],
  followers: [],
};

const firstMiddleware = (store) => (next) => (action) => {
  console.log("액션 로깅", action);
  // next를 dispatch라고 생각할 수 있다.
  next(action);

  console.log("액션 끝");
};

const thunkMiddleware = (store) => (dispatch) => (action) => {
  if (typeof action === "function") {
    // 비동기
    return action(store.dispatch, store.getState);
  }
  return dispatch(action);
};

// compose는 합성하는 함수
const enhancer = compose(
  applyMiddleware(firstMiddleware, thunkMiddleware),
  typeof window === "object" &&
    typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== "undefined"
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
    : (f) => f
);

const store = createStore(reducer, initialState, enhancer);

module.exports = store;

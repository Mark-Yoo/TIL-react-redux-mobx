const { createStore } = require("redux");
const reducer = require("./reducers/index");
const { logIn, logOut } = require("./actions/user");
const { addPost } = require("./actions/post");

const initialState = {
  user: {
    isLoggingIn: true,
    data: null,
  },
  posts: [],
  comments: [],
  favorites: [],
  history: [],
  likes: [],
  followers: [],
};

const store = createStore(reducer, initialState);
store.subscribe(() => {
  console.log("changed");
});

console.log("1st", store.getState());

store.dispatch(logIn());

store.dispatch(
  logIn({
    name: "markYoo",
    admin: true,
  })
);
console.log("2nd", store.getState());

store.dispatch(
  addPost({
    userId: 1,
    id: 1,
    content: "배워보자 redux",
  })
);
store.dispatch(
  addPost({
    userId: 1,
    id: 2,
    content: "배워보자 mobx",
  })
);

console.log("3rd", store.getState());

store.dispatch(logOut());

console.log("4th", store.getState());

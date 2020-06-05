const { createStore } = require("redux");

const reducer = (prevState, action) => {
  // 새로운 state를 만들어야 하기 때문에 return이 없으면 문제가 생긴다.
  switch (action.type) {
    case "LOG_IN":
      return {
        ...prevState,
        user: action.data,
      };
    case "ADD_POST":
      return {
        ...prevState,
        posts: [...prevState.posts, action.data],
      };
    case "LOG_OUT":
      return {
        ...prevState,
        user: null,
      };
    // 행여나 action.type에서 오타가 나는 등의 문제가 생기면 return이 없어서 에러가 발생할 수 있으므로 default에서는 이 상황에서 return 해 줄 것이 필요하다.
    default:
      return prevState;
  }
};
const initialState = {
  user: null,
  posts: [],
};

const store = createStore(reducer, initialState);
store.subscribe(() => {
  //react-redux 안에 들어있는 subscribe (보통 에러 디버깅을 위해서 사용함)
  console.log("changed");
});

console.log("1st", store.getState());

// action
// const changeCompA = {
//   type: "CHANGE_COMP_A",
//   data: "b",
// };

// 위의 함수를 조금 더 유동적으로 리팩토링
const logIn = (data) => {
  return {
    type: "LOG_IN",
    data,
  };
};

const logOut = () => {
  return {
    type: "LOG_OUT",
  };
};

const addPost = (data) => {
  return {
    type: "ADD_POST",
    data,
  };
};

store.dispatch(logIn());

//store.dispatch({
// type: 'CHANGE_COMP_A',
// data: 'b',
//});

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

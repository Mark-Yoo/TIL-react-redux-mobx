const { createStore } = require("redux");

const reducer = (prevState, action) => {
  // 새로운 state를 만들어야 하기 때문에 return이 없으면 문제가 생긴다.
  switch (action.type) {
    case "CHANGE_COMP_A":
      return {
        ...prevState,
        compA: action.data,
      };
    case "CHANGE_COMP_B":
      return {
        ...prevState,
        compB: action.data,
      };
    case "CHANGE_COMP_C":
      return {
        ...prevState,
        compC: action.data,
      };
    // 행여나 action.type에서 오타가 나는 등의 문제가 생기면 return이 없어서 에러가 발생할 수 있으므로 default에서는 이 상황에서 return 해 줄 것이 필요하다.
    default:
      return prevState;
  }
};
const initialState = {
  compA: "a",
  compB: 12,
  compC: null,
};

const store = createStore(reducer, initialState);

console.log("1st", store.getState());

// action
// const changeCompA = {
//   type: "CHANGE_COMP_A",
//   data: "b",
// };

// 위의 함수를 조금 더 유동적으로 리팩토링
const changeCompA = (data) => {
  return {
    type: "CHANGE_COMP_A",
    data,
  };
};

//store.dispatch({
// type: 'CHANGE_COMP_A',
// data: 'b',
//});

store.dispatch(changeCompA("c"));
store.dispatch(changeCompA("c"));

console.log("2nd", store.getState());

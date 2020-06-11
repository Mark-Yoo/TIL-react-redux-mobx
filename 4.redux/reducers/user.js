const { produce } = require("immer");

const initialState = [];

const userReducer = (prevState = initialState, action) => {
  // draft는 복사본으로 불변성을 지키기 위해 번거롭게 스프레드 문법을 사용하지 않고 직접 할당 방식을 사용할 수 있어 간편하다.
  return produce(prevState, (draft) => {
    switch (action.type) {
      case "LOG_IN_REQUEST":
        draft.data = null;
        draft.isLoggingIn = true;
        break;
      case "LOG_IN_SUCCESS":
        draft.data = action.data;
        draft.isLoggingIn = false;
        break;
      case "LOG_IN_FAILURE":
        draft.data = null;
        draft.isLoggingIn = false;
        break;
      case "LOG_OUT":
        draft.data = null;
        break;
      default:
        break;
    }
  });
};

module.exports = userReducer;

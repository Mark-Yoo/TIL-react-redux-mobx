const logIn = (data) => {
  // async action creator
  // 비동기이므로 함수 반환
  return (dispatch, getState) => {
    // async action
    dispatch(logInRequest(data));
    try {
      setTimeout(() => {
        dispatch(
          logInSuccess({
            userId: 1,
            nickname: "mark-yoo",
          })
        );
      }, 2000);
      // axios.post().then().catch()로 이후에 대체 할 예정(redux에 비동기 액션이 없으므로 setTimeout 비동기 함수를 이용했음)
    } catch (e) {
      dispatch(logInFailure(e));
    }
  };
};

const logInRequest = (data) => {
  return {
    type: "LOG_IN_REQUEST",
    data,
  };
};

const logInSuccess = (data) => {
  return {
    type: "LOG_IN_SUCCESS",
    data,
  };
};
const logInFailure = (error) => {
  return {
    type: "LOG_IN_FAILURE",
    error,
  };
};

// const logIn = (data) => {
//   // sync action creator
//   return {
//     type: "LOG_IN",
//     data,
//   };
// };

const logOut = () => {
  return {
    type: "LOG_OUT",
  };
};

module.exports = {
  logIn,
  logOut,
};

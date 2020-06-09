import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
const { logIn } = require('./actions/user');

const App = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const onClick = useCallback(
    () => {
      dispatch(logIn({
        id: 'mark-yoo',
        password: 'asdf1234'
      }))
    }, [],
  )
  return (
    <div>
      {user.isLoggingIn ? <div>로그인 중</div> : user.data ? <div>{user.data.nickname}</div> : '로그인 해주세요'}
      {!user.data && <button onClick={onClick}>로그인</button>}
    </div>
  );
};

export default App;
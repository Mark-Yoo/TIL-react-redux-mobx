import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
const { logIn } = require('./actions/user');

const App = () => {
  const user = useSelector(() => {});
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
      <button onClick={onClick}>로그인</button>
    </div>
  );
};

export default App;
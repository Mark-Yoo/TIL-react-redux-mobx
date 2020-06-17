import React, { useCallback } from 'react';
import { useObserver, useLocalStore } from 'mobx-react';

import { userStore, postStore } from './store';

const App = () => {
  const state = useLocalStore(() => ({
    name: '',
    password: '',
    onChangeName(e) {
      this.name = e.target.value;
    },
    onChangePassword(e) {
      this.password = e.target.value;
    }
  }))

  const onLogIn = useCallback(() => {
    userStore.logIn({
      nickname: 'mark-yoo',
      password: '1234',
    });
  }, []);

  const onLogOut = useCallback(() => {
    userStore.logOut();
  }, []);

  return useObserver(() => (
    <div>
      {userStore.isLoggingIn
        ? <div>로그인 중</div>
        : userStore.data
          ? <div>{userStore.data.nickname}</div>
          : '로그인 해주세요.'}
      {!userStore.data
        ? <button onClick={onLogIn}>로그인</button>
        : <button onClick={onLogOut}>로그아웃</button>}
      <div>{postStore.data.length}</div>
      <div>
        <input value={this.state.name} onChange={(e) => {
          this.state.name = e.target.value;
        }} />
        <input value={this.state.password} type="password" onChange={(e) => {
          this.state.password = e.target.value;
        }}  />
      </div>
    </div>
  ));
}

export default App;
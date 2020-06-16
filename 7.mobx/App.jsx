import React, { Component } from 'react';
import { observable } from 'mobx';
import { observer } from 'mobx-react';
import {} from './store';

@observer
class App extends Component {
  onLogIn = () => {};

  onLogOut = () => {};

  onChangeName = (e) => {
    this.state.name = e.target.value;
  };

  onChangePassword = (e) => {
    this.state.password = e.target.value;
  }
  render() {
    <div>
    {user.isLoggingIn ? <div>로그인 중</div> : user.data ? <div>{user.data.nickname}</div> : '로그인 해주세요'}
    {!user.data ? <button onClick={onClick}>로그인</button> : <button onClick={onLogout}>로그아웃</button>}
    <div>{postStore.data.length}</div>
    <input value={this.state.name} onChange={(e) => {this.onChangeName }} />
    <input value={this.state.password} type="password" onChange={(e) => { this.onChangePassword }} />
    </div>
  }
}

export default App;
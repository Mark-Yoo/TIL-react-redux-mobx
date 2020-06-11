import React from 'react';
import { connect } from 'react-redux';
const { logIn, logOut } = require('./actions/user');

class App {
  onClick = () => {
    this.props.dispatchLogIn(logIn({
      id: 'mark-yoo',
      password: 'asdf1234'
    }));
  }

  onLogout = () => {
    this.props.dispatchLogOut(logOut());
  };

  render() {
    const { user } = this.props;
    return (
      <div>
        {user.isLoggingIn ? <div>로그인 중</div> : user.data ? <div>{user.data.nickname}</div> : '로그인 해주세요'}
        {!user.data ? <button onClick={this.onClick}>로그인</button> : <button onClick={this.onLogout}>로그아웃</button>}
      </div>
    );
  }
}

// 이 방법은 컴포넌트가 렌더링 될 때마다 매번 계산이 다시 실행된다. 때문에 성능상의 문제가 생길 수 있다.
const mapStateToProps = (state) => ({
  user: state.user,
}); // reselect를 사용하면 이 계산을 막는다.

const mapDispatchToProps = (dispatch) => ({
  dispatchLogIn: (data) => dispatch(logIn(data)),
  dispatchLogOut: () => dispatch(logOut())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
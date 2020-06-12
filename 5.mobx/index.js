const { observable, autorun, reaction, action, runInAction } = require("mobx");

const userState = observable({
  isLogginIn: true,
  data: null,
});

const postState = observable([]);

postState.push({ id: 1, content: "안녕하세요" });
userState.data = {
  id: 1,
  nickname: "mark-yoo",
};

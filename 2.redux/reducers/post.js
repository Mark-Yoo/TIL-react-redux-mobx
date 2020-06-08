const postReducer = (prevState, action) => {
  switch (action.type) {
    case "ADD_POST":
      return {
        ...prevState,
        posts: [...prevState.posts, action.data],
      };
    default:
      return prevState;
  }
};

module.exports = postReducer;

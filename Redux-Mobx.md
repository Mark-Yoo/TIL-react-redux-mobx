# React-redux vs. Mobx-react

둘은 서로를 대체할 수 있는 기능이다. contextAPI와 useReducer hook이 있음에도 이 둘을 사용하는 이유는 결국 구조가 Redux, Mobx의 형태를 띄게 되므로 처음부터 이들을 사용하는 경우가 대부분이다.

React-redux와 Mobx-react는 flux라는 단방향 패턴에서 시작하게 되었다. 이는 함수형 프로그래밍의 이념을 따라간다.

Redux는 컴포넌트 간의 상태 관리 문제를 해결하기 위함이므로 state를 사용해도 문제가 없다. 하지만 state를 사용해야 하는 상황이라면 단일 컴포넌트 내에서 해결되는 문제일 때에만 사용하는 것이 옳은 사용법이다.

기본적으로 redux는 dispatch 할 action 들을 미리 만들어놓아야 한다. 또한 타임머신 기능을 사용하기 위해서는 불변성을 지켜주어야 한다. 때문에 상태를 가진 객체를 계속 새로 만들어주어야 한다.

리덕스의 장점은 상태의 불변성을 지킬 수 있다는 것이지만 반대로 이것이 단점이 되기도 한다. 단순 재할당으로는 상태의 불변성을 지킬 수 없기 때문에 단순 재할당을 떠나 다른 방법을 생각해야 하기 때문이다.

> 코딩에서 변수명을 지어야 되는 상황을 피하도록 노력해야 한다. 

Reducer는 action을 dispatch 받아서 새로운 상태를 만들어준다. (불변성을 지켜주어야 한다.) 이 때 이전 상태는 수정되는 것이 아닌 새로운 상태를 만들어 대체하는 것이다.

***action은 함수가 아니라 객체이다***

프로젝트의 형태와 규모에 따라 mobx와 redux를 개별적으로 활요하거나 일반 hooks를 이용힐것인가에 대한 고민이 필요하다. 무조건적인 라이브러리의 활용은 도리어 코드를 어지럽게 만들 수 있다.

## 미들웨어

### redux-thunk

- 비동기를 제어하는 미들웨어 중 하나로 삼단함수로 이루어져 있다.

- 커링을 사용하는 것이 확장성을 더 뛰어나게 만든다.



## react-redux

- 리덕스에는 비동기 액션이 없고 눈속임이다.



## Immer

- redux에서 상태관리를 하기 위해서는 불변성을 지켜주어야 하는데 이 때문에 코드가 복잡해지고 길어지는 문제를 해결하기 위해서 immer library를 자주 사용한다. immer를 사용한다면 단순 할당의 형태로 상태를 바꿔줄 수 있기 때문이다.



# MobX

- state를 action으로 바꿔주는 형태로 만들어져있다.

  

  ```react/mobx
  // action은 함수일 필요가 없다.
  state.name = 'kim'
  // 위와 같은 방식도 action이다.
  ```

- mobx의 state는 observable이라고 하는 객체로 감싸져있고, 이 객체가 action이 발생하였을 때 observer에 상태가 바뀌었다고 알려주는 형태로 되어있다.

- Flux 패턴은 양방향 패턴에서 생기는 수많은 버그들을 해결하기 위해 만들어지 패턴이다.

- Redux는 부모 자식 관계의 컴포넌트 사이에서 상태를 전달해야 하는 상황에서 생기는 문제점을 해결하기 위해서 나온 것.

- autorun과 reaction은 둘 다 감지기 역할을 한다. 
- autorun은 무엇이든 상태가 바뀌면 모두 감지한다.
- reaction은 첫번째 인수에서 return하는 값이 바뀌었을 때에만 실행 된다.
- 리덕스에서 한 번에 2가지의 동작을 실행하는 액션을 만들 수가 없지만 mobx에서는 임의로 이러한 액션을 만드는 것이 가능하다.

- mobx에서 observer는 데코레이터로도 사용할 수 있다. (아직 experimental stage 이므로 언제든 바뀔 수 있다.)

- mobx에서는 사용방법이 너무 자유로워 strict 모드인 configure를 사용할 수 있는데, 이 때 상태를 바꾸는 함수에 action을 붙여준다.
- observable로 사용하는 상태는 구조분해할당을 하면 observable이 깨져버리므로 조심할 것
- 비동기 동작은 보통 리덕스 사가에 위임하는 경우가 많다
- mobx의 자유로운 사용법으로 인해 redux의 안정된 구조를 선호하는 경우도 있다

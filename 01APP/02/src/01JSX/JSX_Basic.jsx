// JSX_Basic.jsx

//01 기본 JSX 요소 생성
export const Element1 = () => <h1>HELLO WORLD - 1</h1>;

//02 function 예약어로 export
export function Element2() {
  return <h2>HELLO WORLD -2</h2>;
}

//03 외부 인자 받기
export function Element3(props) {
  if (props.auth === "ROLE_ADMIN") {
    return <h2>HELLO ADMIN, NAME : {props.name}</h2>;
  }
  if (props.auth === "ROLE_USER") {
    return <h2>HELLO USER, NAME : {props.name}</h2>;
  }
  return <h2>NO AUTH</h2>; // fallback
}

//04 외부 인자 받기 (구조 분해 할당)
export const Element4 = ({ auth, name }) => {
  if (auth === "ROLE_ADMIN") {
    return <h2>HELLO ADMIN, NAME : {name}</h2>;
  }
  if (auth === "ROLE_USER") {
    return <h2>HELLO USER, NAME : {name}</h2>;
  }
  return <h2>NO AUTH</h2>; // fallback
};

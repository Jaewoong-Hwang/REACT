import {Element1,Element2} from "./01JSX/JSX_Basic";
import { Element3, Element4 } from "./01JSX/JSX_Basic";


function App() {
  const headerTitle = "HEADER TITLE";
  const mainContent = "MAIN CONTENTS";
  return (
    <>
      <div className="App">
        <div
          className="header"
          style={{ fontSize: "30px", backgroundColor: "orange" }}>
          {headerTitle}
          <Element1/>
          <Element2/>

        </div>
        <div className="main">{mainContent}</div>
        <div className="footer">
          <Element3 auth={"ROLE_USER"} name={"홍길동"}/>
          <hr/>
          <Element4 auth={"ROLE_ADMIN"} name={"장길동"} />
          </div>
      </div>
    </>
  );
}

export default App;

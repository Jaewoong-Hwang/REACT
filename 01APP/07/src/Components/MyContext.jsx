
//context 는 전역 설정을 하지만 한시적으로 설정되는 것임. App이 실행되는 동안 계속 되는 게 아님

import React from "react";
const AppContext = React.createContext();
export default AppContext;
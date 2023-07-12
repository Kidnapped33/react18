import React from "react";
// import logo from './logo.svg';
// import './App.css';
// import Home from "./view/Ashine";
// import One from "./view/One/One";
// import Player from "./view/player/Player";
import { ConfigProvider } from "antd";
// import Hooks from "./view/hooks/Hook";

function App() {
  console.log('app')
  return (
    <div className="App">
      <ConfigProvider theme={{ token: { colorPrimary: "#519aba" } }}>
        {/* <div>react test</div> */}
        {/* <Home></Home> */}
        {/* <One></One> */}
      </ConfigProvider>
      {/* <Player /> */}
    </div>
  );
}

export default App;

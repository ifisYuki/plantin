import React from 'react';
import './App.css';
import Header from "./Header";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import RightSidebar from "./RightSidebar";
import EmbedPage from "./EmbedPage";

function App() {
  return(
    <div className="app">
      <Header />
      <div className="app__body">
        <Sidebar />
        <Feed /> {/* 添加 Feed 组件 */}
        <RightSidebar />
      </div>
    </div>
  );
}

export default App;

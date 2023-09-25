import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Player } from "./ui/player";
import { AddResource } from "./ui/add-resource";
import { ExpFiles } from "./ui/export-files";

function App() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <div className="left flex flex-col border-solid border-2 w-[250px]">
          <div className="flex-1">
            <AddResource></AddResource>
          </div>
          <div className="sprite-list flex-1">
            <div className="font-bold">素材列表</div>
            <div>开发中</div>
          </div>
          <div className="tpl-list flex-1">
            <div className="font-bold">模板列表</div>
            <div>开发中</div>
          </div>
        </div>
        <div className="main flex-1 border-solid border-2">
          <Player></Player>
        </div>
        <div className="right border-solid border-2 w-[250px]">
          <ExpFiles></ExpFiles>
        </div>
      </div>
      <footer className="text-center">开发中</footer>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
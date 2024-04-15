import ReactDOM from 'react-dom/client';
import './index.css';
import { Player } from './ui/player';
import { AddResource } from './ui/add-resource';
import { ExpFiles } from './ui/export-files';
import { ResourceList } from './ui/resource-list';

function App() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <div className="left flex flex-col border-solid border-2 w-[250px]">
          <div className="flex-1">
            <AddResource></AddResource>
          </div>
          <div className="sprite-list flex-1">
            <div className="font-bold">Capture</div>
            <ResourceList></ResourceList>
          </div>
          <div className="tpl-list flex-1">
            <div className="font-bold">sound</div>
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
      <footer className="text-center">
        <a
          className="text-blue-400"
          href="https://github.com/hughfenghen/bloom-shadow"
        >
         Webcodec recorder
        </a>{' '}
        Powerd by{' '}
        <a
          className="text-blue-400"
          href="https://haawkeneuraltech.com/"
        >
         Haawke Neural Technology
        </a>
      </footer>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')!).render(<App />);

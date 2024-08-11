import './App.css'
import Topbar from './comps/Topbar';
import TreeStructure from './comps/TreeStructure';
import RightPanel from './comps/RightPanel';
import Map from './comps/Map';

function App() {

  return (
    <div className="main-screen-layout">
      <Topbar />
      <div className="screen-content">
        <TreeStructure />
        <RightPanel />
        <Map />
      </div>
      </div>
  )
}

export default App

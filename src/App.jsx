import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import Dashboard from './components/Dashboard/Dashboard';

function App() {
  console.log("Appp");
  return (
    <><Sidebar /><main className="main">
      <Dashboard />
    </main></>
  );
}

export default App

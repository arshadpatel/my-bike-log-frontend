import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import MonthlyDashboard from './components/Dashboard/MonthlyDashboard';
import { useState } from 'react';
import OverallDashboard from './components/Dashboard/OverallDashboard';

function App() {

  const [ activeTab, setActiveTab ] = useState('monthly');

  const renderActiveComponent = (activeTab) => {
    console.log(activeTab);
    switch (activeTab) {
      case 'monthly':
        return <MonthlyDashboard />;
      
      case 'overall':
        return <OverallDashboard />;
        
      default:
        break;
    }
  }

  return (
    <>
      <Sidebar activeTab = {activeTab} setActiveTab = {setActiveTab}/>
      <main className="main">
        { renderActiveComponent(activeTab) }
      </main>
    </>
  );
}

export default App

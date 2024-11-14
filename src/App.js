import { BrowserRouter } from 'react-router-dom';
import './App.css';
import MainComponent from './components/MainComponent';


function App() {
  return (
  <div className="App">
    <BrowserRouter future={{ v7_relativeSplatPath: true, v7_startTransition: true }}>
      <MainComponent />
    </BrowserRouter>
  </div>
  );
}

export default App;

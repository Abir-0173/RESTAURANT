import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import MainComponent from './components/MainComponent';
import myStore from './redux/store';
import { Provider } from 'react-redux';//Must need when use redux


function App() {
    // console.log("App.js: ", myStore.getState());
  return (
    <div className="App">
      <Provider store={myStore}>
        <BrowserRouter future={{ v7_relativeSplatPath: true, v7_startTransition: true }}>
          <MainComponent />
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
